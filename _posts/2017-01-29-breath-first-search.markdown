---
layout: post
title:  "Breadth First Search"
date:   2017-01-27 12:53:41 -0500
categories: algorithms
---

# Intro to Graphs

It's helpful to understand what a graph is before going into Breadth First Search. A graph represents a set of connections. It is made up of _nodes_ and _edges_. Nodes can be connected to other nodes; if they are next to each other, they are called _neighbors_. An _edge_ is a connection from one node to another. Graphs are a great way to model how things are connected to one another. There are even specialied graphing databases such as [neo4j][neo4j-link]

![Graph Diagram]({{ site.url}}/images/Graphs-Intro.svg)

# Breadth First Search


It is helpful to visualize a graph when performing a BFS. It helps you answer questions like: Is there a path from node A to node B? What is the shortest path?

## How does it work?
It works by searching a nodes first degree connections first; that is all the edges connected directly to a node.

## How do you implement a BFS?
A hash is a great data structure to represent a BFS model. A key can present a node and its value (really an array holding values) can represent all its edges.

family['imran'] = ['suraya', 'zain', 'tarek']

_directed graph_: a one way relationship between nodes ( has arrows )

_undirected graph_: a two way relationship between the nodes is equal ( no arrows )


## What is BFS running time?

If you end up searching every node (i.e. visting every edge ), the running time is O( number of edges )


[neo4j-link]: https://neo4j.com/
