


import React, { useState, useCallback } from 'react';
import ReactFlow, { Controls, Background, applyNodeChanges, applyEdgeChanges, addEdge } from 'reactflow';

function MyFlowComponent() {
    const initialNodes = [
        {
            id: '1',
            data: { label: 'Node 1', subtitle: 'Node 1' }, 
            position: { x: 0, y: 0 },
            type: 'input',
        },
        {
            id: '2',
            data: { label: 'Node 2', subtitle: 'Node 2' }, 
            position: { x: 100, y: 100 },
        },
        {
            id: '3',
            data: { label: 'Node 3', subtitle: 'Node 3' }, 
            position: { x: 100, y: 200 },
        },
    ];
    

    const initialEdges = [];

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const [selectedNodeLabel, setSelectedNodeLabel] = useState(null);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [],
    );

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [],
    );

    const handleNodeClick = (event, node) => {
        setSelectedNodeLabel(node.data.label); 
    };

    return (
        <div style={{ display: 'flex', height: 500 }}>
            <div style={{ flex: '70%' }}>
                <ReactFlow
                    nodes={nodes}
                    onNodesChange={onNodesChange}
                    edges={edges}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    fitView
                    onNodeClick={handleNodeClick} 
                    
                    
                >
                    <Background />
                    <Controls />
                  
                </ReactFlow>
            </div>
            <div className="updatenode__controls" style={{ flex: '30%' }}>
                <label>Selected Node Label:</label><br />
                <div>{selectedNodeLabel}</div> 
            </div>
        </div>
    );
}

export default MyFlowComponent;

