// Ingredient Component
const Ingredient = ({ingredientTitle, ingredientDesc}) => (
    <div className="ingredient-grid img">
        <div>
            <p className="fnt-3 fnt-semibold">{ingredientTitle}</p>
            <p className="fnt-3-5 fnt-semibold">{ingredientDesc}</p>
        </div>
        <a href="#" className="fnt-4 fnt-semibold">See more</a>
    </div>
);

const IngredientsSection = () => {
    return(
        <section className="section">
            <div className="section-medium">
                <div className="ingredient-grids">
                    <div className="ingredient-grids-row">
                        <div className="ingredient-grid txt">
                            <span className="fnt-4">Ingredients</span>
                            <p className="fnt-1-5 fnt-semibold sec-title">Better Ingredients</p>
                            <span className="fnt-5 dull">Only the best when you choose products offered on our platform - high-quality
                            ingredients for high quality products!</span>
                        </div>
                        <Ingredient ingredientTitle={'Vitamin C'} ingredientDesc = {'Vitamin C as ascorbic acid'}/>
                        <Ingredient ingredientTitle={'Vitamin B3'} ingredientDesc = {'Niacin for healthy gut and skin'}/>
                    </div>
                    <div className="ingredient-grids-row">
                        <Ingredient ingredientTitle={'Magnesium'} ingredientDesc = {'Boost energy and support'}/>
                        <Ingredient ingredientTitle={'Hyaluronic Acid'} ingredientDesc = {'For smooth supple and soft skin!'}/>
                        <Ingredient ingredientTitle={'Lactobacillus'} ingredientDesc = {'Invigorate your gut microbiome'}/>
                        <div className="ingredient-design"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IngredientsSection;