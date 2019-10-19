import React from "react";
import { Container, Repository, Header, Lista } from "./style";

const CompareList = ({repositories}) =>(
  <Container>
    {repositories.map(repository => (
          <Repository key={repositories.id}>
          <Header>
            <img src={repository.owner.avatar_url}  alt={repository.owner.login}/>
            <strong>{repository.name}</strong>
            <small>{repository.owner.login}</small>
          </Header>
    
          <Lista>
            <li>{repository.stargazers_count} <small>Starts</small></li>
            <li>{repository.forks_count} <small>Forks</small></li>
            <li>{repository.open_issues_count} <small>Issues</small></li>
            <li>{repository.lastCommit} <small>Last Commit</small></li>
          </Lista>
        </Repository>
    ) )}
  </Container>
);
export default CompareList;