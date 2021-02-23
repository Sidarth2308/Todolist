import React, {useState, useContext} from 'react'
import {useStyles} from "./styles/list"
import {AnimatedCard, AnimatedCardContent, AnimatedCardMedia, AnimatedContainer, AnimatedGrid, AnimatedTypography, AnimatedTextField, AnimatedCheckbox, AnimatedBox, AnimatedFab, AnimatedAddIcon, AnimatedCancelIcon} from "../../animated-components"
import { v4 as uuidv4 } from 'uuid'
import Axios from "axios"
import {useSpring, animated} from 'react-spring'
import {FirebaseContext} from "../../context/firebase"

function IndividualItem({status, title}){
    const classes = useStyles();
    const [isCompleted, setIsCompleted] = useState(status);

    const handleChange = () => {
        setIsCompleted((prevValue)=>{
            return !prevValue
        });
      };
    return(
        <AnimatedBox className = {classes.cardBox}>
            <AnimatedCheckbox
                checked={isCompleted}
                color="primary"
                onChange={handleChange}
            />
            <AnimatedTypography onClick = {handleChange} style = {isCompleted?{textDecoration : "line-through"}:null} className ={classes.listItemText}>
                {title}
            </AnimatedTypography>
        </AnimatedBox>
    )

}


function IndividualList({title, Items,id, collection, image}){
    const classes = useStyles();
    const {firebase} = useContext(FirebaseContext)
    const [newItem, setNewItem] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [cardTitle, setCardTitle] = useState(title)
    const props = useSpring({opacity: 1, from: {opacity: 0}})
    const handleTextChange = ({target})=>{
        setNewItem(target.value)
    }  
    const handleTitleChange = ({target})=>{
        setCardTitle(target.value)
    }    
    const handleAddNewItem = (event)=>{
        event.preventDefault()
        firebase.firestore().collection(collection).doc(id).update({
            Items : [...Items, {id : uuidv4(), title:newItem, isCompleted :false}],
        })
        setNewItem("")
    }
    const handleTitleSubmit = (event)=>{
        event.preventDefault()
        firebase.firestore().collection(collection).doc(id).update({
            title : cardTitle,
        })
        setIsEditing(false)
    }
    const deleteList = ()=>{
        firebase.firestore().collection(collection).doc(id).delete()
    }
    
        return(
            <AnimatedGrid style={props} item xs = {6} sm={6} md={3}>
                <AnimatedCard className = {classes.card}>
                        <AnimatedCardMedia
                            className={classes.cardMedia}
                            image={`/images/list/${image}.jpg`}
                            title="Random Image"
                        />
                        {isEditing ? 
                        (
                            <animated.form className = {classes.titleForm} onSubmit= {handleTitleSubmit} noValidate autoComplete="off">
                                <AnimatedTextField value= {cardTitle} onChange = {handleTitleChange} size ="medium" className = {classes.titleChangeField} error = {cardTitle.length <=0} InputProps={{ classes }}/>
                            </animated.form>
                        ):
                        (
                        <AnimatedTypography onClick = {()=>{
                            setIsEditing(true)
                        }} gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
                            {title}
                        </AnimatedTypography>
                        )
                        }
                        
                        <AnimatedCardContent className={classes.cardContent}>
                            <AnimatedBox className = {classes.scrollable}>
                            {Items.map((listItem)=>{
                                return(
                                    <IndividualItem  key = {listItem.id} title={listItem.title} status = {listItem.isCompleted} />
                                )    
                            })}
                            </AnimatedBox>
                            <AnimatedBox className={classes.deleteIcon}>
                            <animated.form onSubmit= {handleAddNewItem} noValidate autoComplete="off">
                                <AnimatedTextField value= {newItem} onChange = {handleTextChange} label="Add Item" />
                            </animated.form>
                            
                                <AnimatedFab onClick = {deleteList} color="secondary" aria-label="add" >
                                    <AnimatedCancelIcon />
                                </AnimatedFab>
                            </AnimatedBox>
                        </AnimatedCardContent>
                </AnimatedCard>
            </AnimatedGrid>        
        )
}

export default function AnimatedList({fetchedLists, collection}) {
    const classes = useStyles(); 
    const {firebase} =  useContext(FirebaseContext)
    const createNewList = ()=>{
        
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 101)}`)
        .then(success=>{
            firebase.firestore().collection(collection).add({
                id : uuidv4(),
                title : success.data.name,
                Items : [],
                image : Math.floor(Math.random()*3),
            })
        })
    }

    return (
        <AnimatedContainer className ={classes.cardGrid} maxWidth="lg">
            
            <AnimatedGrid container spacing = {4}>
                {
                    fetchedLists.map((item)=>{
                        return(
                            <IndividualList collection = {collection} lists={fetchedLists} key = {item.docId} id ={item.docId} title = {item.title} Items={item.Items} image = {item.image}/>   
                        )   
                    })
                }
                <AnimatedGrid item xs = {6} sm={6} md={3}>
                    <AnimatedBox className={classes.Fab}>
                        <AnimatedFab onClick = {createNewList} color="primary" aria-label="add" variant="extended" >
                            <AnimatedAddIcon className={classes.addIcon} />
                            Add List
                        </AnimatedFab>
                    </AnimatedBox>
                </AnimatedGrid> 
            </AnimatedGrid>
        </AnimatedContainer>
    )
}
