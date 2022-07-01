# Predefined Annotation Types

A set of annotation types are predefined in the Java SE API. Some
annotation types are used by the Java compiler, and some apply to
other annotations.

## Annotation Types Used by the Java Language

The predefined annotation types defined in `java.lang` are
`@Deprecated`, `@Override`, and `@SuppressWarnings`.

`@Deprecated` annotation indicates that the marked element is
_deprecated_ and should no longer be used. The compiler generates
a warning whenever a program uses a method, class, or field with
the `@Deprecated` annotation. When an element is deprecated, it
should also be documented using the Javadoc `@deprecated` tag, as
shown in the following example. The use of the at sign (@) in both
Javadoc comments and in annotations is not coincidental: they are
related conceptually. Also, note that the Javadoc tag starts with
a lowercase _d_ and the annotation starts with an uppercase _D_.

```java
// Javadoc comment follows
/**
 * @deprecated
 * explanation of why it was deprecated
 */
@Deprecated
static void deprecatedMethod() {}
```

`@Override` annotation informs the compiler that the element is meant
to override an element declared in a superclass. Overriding methods
will be discussed in [Interfaces and Inheritance]().

```java
// mark method as a superclass method that has been overridden
@Override
int overriddenMethod() {}
```

While it is not required to use this annotation when overriding a
method, it helps to prevent errors. If a method marked with `@Override`
fails to correctly override a method in one of its superclasses, the
compiler generates an error.

`@SuppressWarnings` annotation tells the compiler to suppress specific
warnings that it would otherwise generate. In the following example, a
deprecated method is used, and the compiler usually generates a warning.
In this case, however, the annotation causes the warning to be suppressed.

```java
// use a deprecated method and tell compiler not to generate a warning
@SuppressWarnings("deprecation")
void useDeprecatedMethod() {
    // deprecation warning - suppressed
    objectOne.deprecatedMethod();    
}
```

