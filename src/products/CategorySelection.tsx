import style from './CategorySelection.module.css';
type Props = {
    title: string,
    image: string,
    handlerClick: Function
}

function CategorySelection({title, image, handlerClick} : Props)
{
    return (
        <div onClick={() => handlerClick(title)} className={style.body} style={{backgroundImage:`url(${image})`}}>
            {title}
        </div>
    )
}

export default CategorySelection;