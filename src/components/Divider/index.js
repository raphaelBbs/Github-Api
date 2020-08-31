import React from 'react'
import './styles.scss';

const DividerExampleDivider = (props) => {
 const { counter } = props

return(
        <div >
        <p className="copyright">
          La recherche a donné {counter} resultat
        </p>
        </div>
      );
}



export default DividerExampleDivider
