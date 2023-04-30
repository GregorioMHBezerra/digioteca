import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '@/components/Input';

class Home extends Component {

  state= {
    title: '',
    numberOfAuthor: 1,
    author: [],
    editor: '',
    local: '',
    year: 0,
    numberOfPages: 0,
    numberOfCategory: 1,
    category: [],
    resume: ''
  }

 //  componentDidMount() {
 //  
 //  }

 //  shouldComponentUpdate(nextProps, nextState) {
 //  
 //    return true;
 //  }

 //  componentDidUpdate() {
 //    const { boolDidUpdate } = this.state;
 //    if (boolDidUpdate) {
 //      this.setState({boolDidUpdate: false,}, this.func)
 //    }
 //  }

 //  componentDidMount() {
 //  
 //  }

handleChange = ({ target }) => {
  const { state } = this;
  const { name, value } = target;
  // const result = target.type === 'checkbox' ? target.checked : value;
  this.setState({
    ...state,
    [name]: value,
  });
};

addAuthor = () => {
  this.setState((i)=> ({
    author: [...i.author, 'qual o nome?']
  }))
};

removeAuthor = () => {
  const {author} = this.state;
  const lessOne = author.filter((aut, index) => index < author.length -1);
  this.setState({
    author: lessOne
  });
}

onClickAuthor = () => {

};


  render() {
    const { title, resume, category, numberOfPages, local, author, year, editor, numberOfCategory, numberOfAuthor } = this.state;
    return (
      <form>
        <Input type="text" name="title" label="Título" onChange={this.handleChange} value={title} />

        <button type="button" onClick={() => this.addAuthor()}>Adicionar Autor</button>
        {author.length > 1  &&
        <button type="button" onClick={this.removeAuthor}>Remover Autor</button> }
        {author.map((authore, index) => (
        <Input 
        type="text"
        name="author" 
        label="Autor"
        onChange={this.handleChange}
        value={author}
        />
        ) )}
        <Input type="text" name="local" label="Local" onChange={this.handleChange} value={local} />
        <Input type="text" name="editor" label="Editor" onChange={this.handleChange} value={editor} />
        <Input type="text" name="year" label="Ano" onChange={this.handleChange} value={year} />
        <Input type="text" name="numberOfPages" label="Páginas" onChange={this.handleChange} value={numberOfPages} />
        <Input type="text" name="category" label="Categoria" onChange={this.handleChange} value={category} />
        <Input type="text" name="resume" label="Resumo" onChange={this.handleChange} value={resume} />
      </form>
    );
  }
}

Home.propTypes = {
  nameState: PropTypes.string,
}.isRequired;

export default Home;
