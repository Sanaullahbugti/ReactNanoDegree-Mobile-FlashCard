import React, { Component } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Container, Header, Content, Item, Input, Left, Body, Title, Right, Button, Card } from 'native-base'
import { saveDeck } from '../../utils/data';

class NewDeck extends Component {
    state = {
        text: ""
    }
    handleChange = event => {
        this.setState( {
            text: event.nativeEvent.text
        } );
    };
    onSubmit = () => {
        let { text } = this.state
        saveDeck( text ).then( res => console.log( text ) )
        this.setState( { text: "" } )
        this.props.navigation.navigate( 'Decks' )

    }
    render() {
        return (

            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>Add New Deck</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Card style={styles.card}>
                        <Item rounded style={styles.textFielld} >
                            <Input placeholder='Deck Title' onChange={this.handleChange} value={this.state.text} />
                        </Item>
                        <Button primary rounded style={styles.btn} onPress={this.onSubmit}><Text style={styles.txt}> Submit </Text></Button>
                    </Card>
                </Content>

            </Container >

        )
    }
}
const styles = StyleSheet.create( {
    card: {
        width: "80%",
        marginLeft: "10%",
    },
    textFielld: {
        marginTop: 200,
        marginLeft: 30,
        paddingLeft: 10,
        width: "80%",

    },
    btn: {
        marginTop: 40,
        marginLeft: 30,
        width: "80%",
        marginBottom:5,
        flex: 1,
    },
    txt: {
        color: "white",
        fontSize: 20
    }
} )
export default NewDeck