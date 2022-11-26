import classes from './MealItem.module.css'


const MealIteam = props =>
{
    const price = `$${props.price.toFixed(2)}`;
    return<lic className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.desc}</div>
            <div className={classes.price}>{price}</div>
        </div>

        <div>

        </div>
    </lic>
}

export default MealIteam