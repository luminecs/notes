# Annotations Basics

## The format of an Annotation

In its simplest form, annotation looks like the following:

```java
@Entity
```

The at sign character (@) indicates to the compiler that what
follows is an annotation. In the following example, the
annotation's name is `Override`:

```java
@Override
void mySuperMethod(){}
```

The annotation can include _elements_, which can be named or
unnamed, and there are values for those elements:

```java
@Author(name = "Benjamin Franklin", date = "3/27/2003")
class MyClass {}
```

or

```java
@SuppressWarnings(value = "unchecked")
void myMethod() {}
```

If there is just on element named `value`, then the name can
be omitted, as in:

```java
@SuppressWarning("unchecked")
void myMethod() {}
```

If the annotation has no elements, then the parentheses can
be omitted, as shown in the previous `@Override` example.

It is also possible to use multiple annotations on the same
declaration:

```java
@Author(name = "Jane Doe")
@EBook
class MyClass {}
```

If the annotations have the same type, then this is called a
`repeating annotation`:

```java
@Author(name = "Jane Doe")
@Author(name = "John Smith")
class MyClass {}
```

Repeating annotations are supported as of the Java SE 8 release.
For more information, see [Repeating Annotations](005-repeating-annotations.md).

The annotation type can be one of the types that are defined in
the `java.lang` or `java.lang.annotation` packages of the Java
SE API. In the previous examples, `Override` and `SuppressWarnings`
are [predefined Java annotations](003-predefined-annotation-types.md). 
It is also possible to define your own annotation type. 
The `Author` and `EBook` annotations in the previous example 
are custom annotation types.

## Where Annotations Can Be Used

Annotations can be applied to declarations: declarations of
classes, fields, methods, and other program elements. When used
on declaration, each annotation often appears, by convention, on
its own line.

As of the Java SE 8 release, annotations can also be applied to
_use_ of types. Here are some examples:

- Class instance creation expression:

```java
new @Interned MyObject();
```

- Type cast:

```java
String myString = (@NonNull String) str;
```

- `implements` clause:

```java
class UnmodifiableList<T> implements 
    @Readonly List<@Readonly T> {}
```

- Thrown exception declaration:

```java
void monitorTemperature() throws
    @Critical TemperatureException {}
```

This form of annotation is called a _type annotation_. For more
information, see
[Type Annotations and Pluggable Type Systems](004-type-annotations-and-pluggable-type-systems.md).
