# Portable Tech Team Deep Dive - fp-ts Deep Dive

A small project that helps illustrate some of the key features of the
fp-ts library as an introduction to functional programming.

## Introduction

We'll be looking at some of the challenges that we'd face if we were to
adopt some of the key aspects of modern functional programming.
* no instances
* no mutable state

Some of the other things to consider later on might be how to:
* perform and represent effects
* create abstractions that allow for the equivalent of dependency
  injection in the OO paradigm

## Agenda

* Getting started
* Quick refresher on Typescript
* Let's look at our object oriented application
* How do we solve some of these things in the functional application

### Getting Started

You will need NodeJS and Yarn installed on your machine.

Once you have that, to install all dependencies, run `yarn`.

Running `yarn start` will run the application.

Documentation pages of interest:
https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#discriminating-unions
https://www.typescriptlang.org/docs/handbook/generics.html

### Quick refresher on Typescript

You may want to take a look at the [Data Modelling Deep Dive in
Typescript](https://github.com/PortableStudios/data-modeling-deep-dive)
for some exercises to get up to speed for this session.

However, at a high level - we want to be able to understand the
following Typescript types.

* Option<T>
* Either<A,B>

#### Option Type

Option<T> is a type that represents two states:

either there is a value;
or there isn't
An example of this would be Option<string> - if a value has this type, there will either be a string available or there will be nothing.

Also note that Option<T> is a generic type, allowing you to specify any particular concrete type for <T>.

#### Either Type

Either<A,B> is a type that represents two states:

either there a value of one type;
or there is a value of a different type;
An example of this would be Either<string, number> - if a value has this type, there will either be a string available or there will be a number.

This type is commonly used to represent a result of a function call,
that might fail. eg. you either get a success with the result, or you
get a failure with the error information.

### Let's look at our object oriented application

TODO

### How do we solve some of these things in the functional application

TODO
