"use client";

import React, { useState, useCallback, useMemo } from 'react';
import {
    ReactFlow,
    Background,
    Controls,
    useNodesState,
    useEdgesState,
    addEdge,
    Connection,
    Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { initialNodes, initialEdges, PBS_CATEGORIES, PBSNodeData } from './pbs-data';
import PBSNode from './pbs-node';
import { motion } from 'framer-motion';
import { type NodeTypes } from '@xyflow/react';

const nodeTypes: NodeTypes = {
    pbsNode: PBSNode,
};

export function PBSSection() {
    const [nodes, setNodes, onNodesChange] = useNodesState(
        initialNodes.map(n => ({ ...n, type: 'pbsNode' }))
    );
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    const highlightCategory = (category: string | null) => {
        setActiveCategory(category);
        setNodes((nds) =>
            nds.map((node) => ({
                ...node,
                data: {
                    ...node.data,
                    isHighlighted: category ? (node.data as PBSNodeData).category === category : false,
                },
            }))
        );
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden min-h-[850px] flex flex-col">
            <div className="container mx-auto px-4 mb-12 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-[#8480F1] mb-6"
                >
                    Structure du Produit
                </motion.h2>
                <p className="text-slate-600 max-w-2xl mx-auto mb-10">
                    Explorez l'écosystème MemoRing. Cliquez sur une catégorie pour mettre en évidence ses composants.
                </p>

                {/* Category Pickers */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    <button
                        onClick={() => highlightCategory(null)}
                        className={`px-6 py-2 rounded-full border-2 transition-all font-medium ${activeCategory === null
                            ? 'bg-[#8480F1] text-white border-[#8480F1] shadow-lg'
                            : 'bg-transparent text-[#1E1B4B] border-[#8480F1]/20 hover:border-[#8480F1]/50'
                            }`}
                    >
                        Tout voir
                    </button>
                    {Object.values(PBS_CATEGORIES).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => highlightCategory(cat)}
                            className={`px-6 py-2 rounded-full border-2 transition-all font-medium ${activeCategory === cat
                                ? 'bg-[#8480F1] text-white border-[#8480F1] shadow-lg'
                                : 'bg-transparent text-[#1E1B4B] border-[#8480F1]/20 hover:border-[#8480F1]/50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-grow relative h-[600px] border-y border-[#8480F1]/10 bg-black rounded-b-3xl mx-4 md:mx-8 overflow-hidden shadow-2xl">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    nodeTypes={nodeTypes}
                    fitView
                    maxZoom={1.5}
                    minZoom={0.2}
                    colorMode="dark"
                    defaultEdgeOptions={{
                        style: { stroke: '#8480F1', strokeWidth: 2, opacity: 0.5 },
                        animated: true,
                    }}
                >
                    <Background color="#333" gap={20} />
                    <Controls className="bg-white/10 border-white/20 fill-white [&_button]:border-white/10" />
                </ReactFlow>
            </div>
        </section>
    );
}
