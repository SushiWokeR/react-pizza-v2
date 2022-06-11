import React from 'react'

const Categories = ({value, onClickCategory}) => {
  const categories = [
    'Все',
    'Столовские',
    'Травяные',
    'Полосатые',
    'Горячие',
    'Пиццы-интроверты',
  ]

  return (
    <div className="categories">
        <ul>
        {
          categories.map((categoryName, i) => {
            return <li key={categoryName} onClick={()=> onClickCategory(i)} className={value === i ? 'active' : ''}> {categoryName} </li>
          })
        }
        </ul>
    </div>
  )
}

export default Categories