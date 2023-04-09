import style from './CategorySelection.module.css';
type Props = {
    title: string,
    image: string,
    handlerClick: Function
}

function CategorySelection({title, image, handlerClick} : Props)
{
    return (
        <a href="javascript:void(0);" onClick={() => handlerClick(title)} className={style.body} style={{backgroundImage:`url(${image})`}}>
            {title}
        </a>
    )
}

export default CategorySelection;