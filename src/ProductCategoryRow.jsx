import React from 'react';

export default class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }
}

