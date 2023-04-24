import React, { useEffect, useRef } from 'react';
import * as joint from 'jointjs';
import './umlDiagram.css';

function UmlDiagram() {
    const paperRef = useRef(null);

    useEffect(() => {
        const graph = new joint.dia.Graph();

        const paper = new joint.dia.Paper({
            el: paperRef.current,
            model: graph,
            width: 600,
            height: 400,
            gridSize: 10,
            drawGrid: true,
            background: {
                color: '#f9f9f9'
            }
        });

        const umlClass = joint.shapes.uml.Class.define('UML Class', {
            attrs: {
                rect: {
                    fill: '#ffffff',
                    stroke: '#000000',
                    'stroke-width': 1,
                    'follow-scale': true,
                    width: 120,
                    height: 60,
                    rx: 10,
                    ry: 10
                },
                text: {
                    fill: '#000000',
                    'font-size': 14,
                    'font-family': 'Arial, helvetica, sans-serif',
                    'ref-x': 0.5,
                    'ref-y': 0.5,
                    'ref-dx': 0.5,
                    'ref-dy': 0.5,
                    'text-anchor': 'middle',
                    'font-weight': 'normal',
                    'font-style': 'normal'
                }
            }
        }, {
            markup: [
                '<g class="rotatable">',
                '<g class="scalable">',
                '<rect/>',
                '</g>',
                '<text/>',
                '</g>'
            ].join('')
        });

        const umlInterface = joint.shapes.uml.Interface.define('UML Interface', {
            attrs: {
                circle: {
                    fill: '#ffffff',
                    stroke: '#000000',
                    'stroke-width': 1,
                    'follow-scale': true,
                    r: 30
                },
                text: {
                    fill: '#000000',
                    'font-size': 14,
                    'font-family': 'Arial, helvetica, sans-serif',
                    'ref-x': 0.5,
                    'ref-y': 0.5,
                    'ref-dx': 0.5,
                    'ref-dy': 0.5,
                    'text-anchor': 'middle',
                    'font-weight': 'normal',
                    'font-style': 'normal'
                }
            }
        }, {
            markup: [
                '<g class="rotatable">',
                '<g class="scalable">',
                '<circle/>',
                '</g>',
                '<text/>',
                '</g>'
            ].join('')
        });

        const class1 = new umlClass({
            position: { x: 100, y: 100 },
            name: 'MyClass',
            attributes: ['attr1: string', 'attr2: int'],
            methods: ['method1()', 'method2()']
        });

        const interface1 = new umlInterface({
            position: { x: 400, y: 100 },
            name: 'MyInterface',
            methods: ['method1()', 'method2()']
        });

        graph.addCells([class1, interface1]);
    }, []);

    return <div ref={paperRef} />;
}

export default UmlDiagram;
