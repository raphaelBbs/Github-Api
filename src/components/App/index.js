// == Import npm
import React , { useState } from 'react';

// == Import
import './styles.css';
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import { Card, Icon } from 'semantic-ui-react'
import CardExampleCardProps from '../Cards'
import FormExampleForm from '../Form'
import DividerExampleDivider from '../Divider'
import Header from '../Header'
import axios from 'axios';
import Footer from '../Footer'
import Loading from '../Loading';




// == Composant
class App extends React.Component  {

  //==========================COPIE CODE DE TONY====================================
  state = {
    data: [],
    formText: '',
    data2: [],
    counter: 9,
    datacount: 0 ,
    setLoading: true,
    page: 1,
  }
  handleInputChange = (texteSaisiParLuser) => {
    
    this.setState({
      formText: texteSaisiParLuser,
      
    });
  } 

  counter = () => {
const { counter } = this.state;

this.setState({
  counter: counter + 9,
})

}
pagePrec = () => {

  const { page } = this.state;

  this.setState({
    page: page - 1,
  })
  
  }
  pageSuiv = () => {

    const { page } = this.state;
  
    this.setState({
      page: page + 1,
    })
    
    }
   


   fetchList = (url) => {
  const { counter, page } = this.state
  const navWeb =  `https://api.github.com/search/repositories?q=${url}&sort=stars&order=desc&page=${page}&per_page=${counter}`;
  console.log(navWeb);
    axios({
      method: 'get',
      //url: `https://api.github.com/search/repositories?q=` + url, // url: url
      url: `https://api.github.com/search/repositories?q=${url}&sort=stars&order=desc&page=${page}&per_page=${counter}`
      
    })
      .then((res) => {
        this.setState({
          data: res.data.items,
          data2: res.data.owner,
          datacount: res.data.total_count,
          
        });
        console.log(res.data.total_count);
        
      })
      .catch((err) => {
        // console.error(err);
      })
      .finally(() => {
        
        this.setState({
          setLoading: false,
        })
      });
  };
    

//`https://api.github.com/search/repositories?q=${formText}`
// const [categories, categoriesLoading, fetchCategories] = useAjax('https://oclock-open-apis.now.sh/api/blog/categories');
render() {
  

 
  const { formText, data, data2, datacount, setLoading, page } = this.state;
    console.log(page);

 return (
 <div className="app">
        <Header />
            <FormExampleForm     
                  todoLabel={formText}
                  onLabelChange={this.handleInputChange}
                  onListfetch={this.fetchList} 
                  
                  />
            <DividerExampleDivider  counter={datacount} />
            {
            setLoading && <Loading />
          }
            
            <CardExampleCardProps fdp={data} pd={data2} />
            { !setLoading && <Footer  todoLabel={formText} counter={this.counter}  onListfetch={this.fetchList} pagePrec={this.pagePrec} pageSuiv={this.pageSuiv} /> }
          

  </div>
  );
 }
}



// == Export

export default App;


