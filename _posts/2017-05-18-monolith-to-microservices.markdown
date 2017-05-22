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

## Pros:

 * _autonomy_: You allow individuals and teams to move quickly. You can also scale the team easier with a smaller codebase. More importantly, this provides
               a sense of __empowerment__. Decision making is moved to teams without the need to consult external teams that would be affected (with exceptions)

 * _new tech_: What happens inside of your box is less important than its interface. This gives you the freedom of choosing what language or persistence layer best suits your
               service.

 * _security_: Makes defense easier. You can segment your databases and separate out PII. This does make things a little harder too. Now that you communicate over the
               network instead of over process, you have to keep an eye on what you transmit.

 * _scale_: You can easily scale your application. You can also achieve multi-tenacy a little easier.

## Cons:
 
 * _Cognitive Overload_: As your microservice architecture evolves, there is a lot of keep track of. Tooling, Configuration, Discovery, Routing, Observability,
                         Datastores, Orchestration & Deployment, Development, Policy: Architecture & Sec. Compliance.

>
> Tip: Microservices are not ideal for a new startup. The domain model shifts around as you are trying out a new model. This would be a good time to stick with
>     a monolith.
>

### Planning a Transition

The first question you should yourself is _why do you want to adopt microservice?_ If you can answer this, then you know where to start.

A few possible goals:

 * Ship Faster
 * Improve Autonomy
 * Scale your Apps

>
> Tip: Make a statement of an outcome you will achieve that will positively affect your customers. Goals should 
>      be stated in how they affect the customer.
>

Once you know why you want something and have come up with a goal, you should come up with some metrics to track its progress.

#### Improve Autonomy

Let's say you decided you want to increase the freedom you give people to do their job. This has a number of immediate benefits:
 * Reduces the amount of sign off
 * Reduces amount of coordination
 * You can come up with new ideas and ship them faster

## What can you track?
 * # of deployments
 * failure rate
 * # of meetings
 * cycle time (how long does it take to go from code to production)

Team provisioned infrastructure
Better Testing

#### Scale Your Apps

Functionally decompose your monolith to allow latency and load sensitive parts of your application be scaled independently.


## What can you track?
 * latency
 * load
 * failure rate
 * vertical scaling
 * horizontal scaling
 * data partitioning
 * reverse proxies

#### People

A lot of change involves people and teams. Some people will love this, others will not.

>
> Tip: Understand the impact of people. Data isn't more important than feelings. Periodically reflect
>      On how people fee.

How to do periodic checks?

 1) Restate the goal your trying to achieve
 1) Reflect on whether or not your are getting there
 1) What the team thinks about it
 1) Decide what to change


#### Your Customers
You are making changes to a system that is already providing value. Be mindful of the customer experience during a migration.

Change is inevitable. Our systems need to be malleable and flexible. Refactoring is about code. Apply that to architecture as well.
You need to get good at incremental change of your architecture.

>
> Build features for today and the platform for tomorrow
>

