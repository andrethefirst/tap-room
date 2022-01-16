import React from 'react';
import NewSodaForm from './NewSodaForm';
import SodaList from './SodaList';
import SodaDetail from './SodaDetail';
import EditSodaForm from './EditSodaForm';

class SodaControl extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainSodaList: [],
      selectedSoda: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedSoda != null){
      this.setState({
        formVisibleOnPage : false,
        selectedSoda : null,
        editing: false
      });
    } else {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewSodaToList = (newSoda) => {
    const newMainSodaList = this.state.mainSodaList.concat(newSoda);
    this.setState({
      mainSodaList: newMainSodaList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedSoda = (id) => {
    const selectedSoda = this.state.mainSodaList.filter(soda => soda.id === id)[0];
    this.setState({selectedSoda: selectedSoda});
  }

  handleDeletingSoda = (id) => {
    const newMainSodaList = this.state.mainSodaList.filter(soda => soda.id !== id);
    this.setState({
      mainSodaList: newMainSodaList,
      selectedSoda: null
    });
  }

  handleEditClick =() => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingSodaInList = (sodaToEdit) => {
    const editedMainSodaList = this.state.mainSodaList
    .filter(soda => soda.id !== this.state.selectedSoda.id)
    .concat(sodaToEdit);
    this.setState({
      mainSodaList: editedMainSodaList,
      editing: false,
      selectedSoda: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.editing) {
      currentlyVisibleState = <EditSodaForm soda = {this.state.selectedSoda} onEditSoda = {this.handleEditingSodaInList} />
      buttonText = "Return to Soda List";
    } else if(this.state.selectedSoda !=null){
      currentlyVisibleState = <SodaDetail soda = {this.state.selectedSoda} onClickingDelete = {this.handleDeletingSoda} onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Soda List";
    } else if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewSodaCreation = {this.handleAddingNewSodaToList} />
      buttonText = "Return to Soda List";
    } else {
      currentlyVisibleState = <SodaList sodaList = {this.state.mainSodaList} onNewSodaCreation = {this.handleChangingSelectedSoda} />
      buttonText = "Add Soda";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default SodaControl;