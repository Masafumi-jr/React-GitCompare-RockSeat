import React, {Component} from 'react';
import logo from '../../assets/logo.png';
import {Container, Form} from "./style";
import CompareList from "../../components/compareList";
import api from "../../services/api";
import moment from "moment";

export default class Main extends Component {
  state = {
    repository_error: false,
    repositorie_input: ' ',
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
     
    try {

      const {data: repository} = await api.get(`/repos/${this.state.repositorie_input}`);
      
      repository.lastCommit = moment(repository.pushed_at).fromNow();


      this.setState({
        repositories: [...this.state.repositories, repository],
        repository_error: false
      });
   
    }catch(err) {
      console.log(err);
      this.setState({repository_error: true});
    }
  };

  render() {
    return (
      <Container>
      <img src={logo} alt="Git Compare" />

      <Form withError={this.state.repository_error} onSubmit={this.handleAddRepository}>
        <input  
        type="text" 
        placeholder="Usuário/Repositório" 
        value={this.state.repositorie_input} 
        onChange={e => this.setState({repositorie_input: e.target.value })}
        />
        <button  type="submit">OK</button>
      </Form>

      <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}

