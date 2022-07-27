import React from "react";
import ProductCategoryRow from "ProductCategoryDefault";

export default class ProductTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;

        this.props.forEach((product) => {
            if(product.category !== lastCategory){
                rows.push(
                    <ProductCategoryRow 
                    category={product.category}
                    key={product.category} />
                );
                lastCategory = product.category;
            }
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}