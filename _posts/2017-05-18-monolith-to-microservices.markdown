---
layout: post
title:  "From Monoliths to Microservices Notes"
date:   2017-05-18 12:53:41 -0500
categories: microservices architecture
---

# From Monolith to Microservices Notes

_These are my cleaned up notes taken from Sam Newman's Monolith to Microservices Orielly class._

This post describes patterns and strategies for migrating to a microservice architecture. We will
start by defining what are microservices. We will mention when it is a good idea to adopt microservices
and when it is not.

We will discuss strategies for migrating an existing system, build and deployments and monitoring.


>
> **What are microservices?**
>
> Small independently deployable services that work together and 
> are modelled around a business domain - _Sam Newman_
> 

Let's clarify what _small_ means. Its more about manageability than anything else like 
lines of code. Focus on the problem set or business problem the service is trying to solve.

>
> Tip: Start with 1 or 2 microservices to roll out into production. This will help you discover
>      what is needed to support and maintain more as your number of services increate.
>

Being able to automate and perform _indepdenent deployments_ is extremely important and is one
of the main goals you should be looking to achieve. If speed and time to market is important to 
you, this is what you should optimize for.

### Compared to SOA
Microservices are generally considered SOA done right. It is related to the rise of web services.
Microservices are opininated whereas SOA which is not very prescriptive at all.

A good analogy is being agile. You have different methodologies (microservices) of approaching being agile (service oriented).


### Why use microservices?

 * _autonomy_: You allow individuals and teams to move quickly. You can also scale the team easier with a smaller codebase. More importantly, this provides
               a sense of __empowerment__. Decision making is moved to teams without the need to consult external teams that would be affected (with exceptions)



