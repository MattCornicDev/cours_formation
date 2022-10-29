import React, { Component } from 'react'
import './tableNode.css'
import 'bootstrap/dist/css/bootstrap.css';

export default class tableNode extends Component {
    render() {
        return (
            <>
                <ul class="list-group">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                </ul>
            </>
        )
    }
}
