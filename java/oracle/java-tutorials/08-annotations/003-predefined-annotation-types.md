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

Every compiler warning belongs to a category. The Java Language Specification
lists two categories: `deprecation` and `unchecked`. The `unchecked` warning
can occur when interfacing with legacy code written before the advent of
[generics](). To suppress multiple categories of warnings, use the following
syntax:

```java
@SuppressWarnings({"unchecked", "deprecation"})
```

`@SafeVarargs` annotation, when applied to a method or constructor, asserts
that the code does not perform potentially unsafe operations on its `varargs`
parameter. When this annotation type is used, unchecked warnings relating to
`varargs` usage are suppressed.

`@FunctionalInterface` annotation, introduced in Java SE 8, indicates that
the type declaration is intended to be a functional interface, as defined by
the Java Language Specification.

## Annotations That Apply to Other Annotations

Annotations that apply to other annotations are called _meta-annotations_.
There are several meta-annotation types defined in `java.lang.annotation`.

`@Retention` annotation specifies how the marked annotation is stored:

- `RetentionPolicy.SOURCE` - The marked annotation is retained only in the
source level and is ignored by the compiler.
- `RetentionPolicy.CLASS` - The marked annotations is retained by the
compiler at compile time, but is ignored by the Java Virtual Machine (JVM).
- `RetentionPolicy.RUNTIME` - The marked annotation is retained by the JVM
, so it can be used by the runtime environment.

`@Documented` annotation indicates that whenever the specified annotation
is used those elements should be documented using the Javadoc tool. (By
default, annotations are not included in Javadoc.) For more information,
see the [Javadoc tools page](https://docs.oracle.com/javase/8/docs/technotes/guides/javadoc/index.html).

`@Target` annotation marks another annotation to restrict what kind of
Java elements the annotation can be applied to. A target annotation
specifies one of the following element types as its value:

- `ElementType.ANNOTATION_TYPE` can be applied to an annotation type.
- `ElementType.CONSTRUCTOR` can be applied to a constructor.
- `ElementType.FIELD` can be applied to a field or property.
- `ElementType.LOCAL_VARIABLE` can be applied to local variable.
- `ElementType.METHOD` can be applied to a method-level annotation.
- `ElementType.PACKAGE` can be applied to a package declaration.
- `ElementType.PARAMETER` can be applied to the parameters of a method.
- `ElementType.TYPE` can be applied to any element of a class.

`@Inherited` annotation indicates that the annotation type can be inherited
from the super class. (This is not true by default.) When the user queries
the annotation type and the class has no annotation for this type, the
class's superclass is queried for the annotation type. This annotation
applied only to class declarations.

`@Repeatable` annotation, introduced in Java SE 8, indicates that the
marked annotation can be applied more than once to the same declaration or
type use. For more information, see [Repeating Annotations](https://docs.oracle.com/javase/tutorial/java/annotations/repeating.html)















