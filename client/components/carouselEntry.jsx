import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { CarouselEntryWrapper, CarouselEntryImg, ModalButtonRight, ModalButtonLeft, ModalBin, ModalImage, Modal, ModalHeader, ModalXButton, ModalCount } from './stylesheet.jsx';


class CarouselEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      clickedPhoto: '',
      currentPhoto: '',
      currentIndex: 0,
      largeCarousel: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.findThePhoto = this.findThePhoto.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.modalClick = this.modalClick.bind(this);
  }

  handleClick() {
    this.setState({clickedPhoto: this.props.entry._id});

    axios.get(`/api/imglarge/${this.props.entry.movie.id}`)
    .then(response => {
      console.log(response);
      this.setState({largeCarousel: response.data})
    })
    .finally(() => {
      this.findThePhoto();
      this.toggleModal();
    })
    .catch(error => {
      console.log(error);
    })
  }

  findThePhoto() {
    for (let i = 0; i < this.state.largeCarousel.length; i++) {
      if (this.state.largeCarousel[i]._id === this.state.clickedPhoto) {
        this.setState({currentPhoto: this.state.largeCarousel[i].large_url, currentIndex: i});
      }
    }
  }

  toggleModal() {
    this.setState({modalIsOpen: !this.state.modalIsOpen});
  }

  modalClick(event) {
    var maxLength = this.state.largeCarousel.length - 1;
    var upIndex = this.state.currentIndex + 1;
    var downIndex = this.state.currentIndex - 1;

    if (event.target.value === '>') {
      if (this.state.currentIndex === maxLength) {
        this.setState({currentPhoto: this.state.largeCarousel[0].large_url,
          currentIndex: 0})
      } else {
        this.setState({currentPhoto: this.state.largeCarousel[upIndex].large_url,
          currentIndex: upIndex})
      }
    }
    if (event.target.value === '<') {
      if (this.state.currentIndex === 0) {
        this.setState({currentPhoto: this.state.largeCarousel[maxLength].large_url,
          currentIndex: maxLength})
      } else {
        this.setState({currentPhoto: this.state.largeCarousel[downIndex].large_url,
          currentIndex: downIndex})
      }
    }
  }

  render() {
    if (this.state.modalIsOpen) {
      return ReactDOM.createPortal(
        ( <>
            <Modal>
                <ModalHeader>
                  <ModalCount>{this.state.currentIndex + 1} of {this.props.length}</ModalCount>
                  <ModalXButton onClick={this.toggleModal}> X </ModalXButton>
                </ModalHeader>
                <ModalBin>
                  <ModalButtonLeft value="<" onClick={this.modalClick}>{'<'}</ModalButtonLeft>
                  <ModalImage src={this.state.currentPhoto}></ModalImage>
                  <ModalButtonRight value=">" onClick={this.modalClick}>{'>'}</ModalButtonRight>
                </ModalBin>
            </Modal>
          </>
        ), document.getElementById('imgmodal'));
    }

    return (
      <CarouselEntryWrapper>
        <CarouselEntryImg src={this.props.entry.small_url} alt={this.props.entry._id} onClick={this.handleClick}>
        </CarouselEntryImg>
      </CarouselEntryWrapper>
    );
  }
}


export default CarouselEntry;
