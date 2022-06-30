# Declaring an Annotation Type

Many annotations replace comments in code.

Suppose that a software group traditionally starts the body of every
class with comments providing important information:

```java
public class Generation3List extends Generation2List {
    // Author: John Doe
    // Date: 3/17/2002
    // Current revision: 6
    // Last modified: 4/12/2004
    // By: Jane Doe
    // Reviewers: Alice, Bill, Cindy
    
    // class code goes here
}
```

To add this same metadata with an annotation, you must first define
the _annotation type_. The syntax for doing this is:

```java
@interface ClassPreamble {
    String author();
    String date();
    int currentRevision() default 1;
    String lastModified() default "N/A";
    String lastModifiedBy() default "N/A";
    // Note use of array
    String[] reviewers();
}
```

The annotation type definition looks similar to an interface definition
where the keyword `interface` is preceded by the at sign (@)(@ = AT, as
in annotation type). Annotation types are a form of _interface_, which
will be covered in a later lesson. For the moment, you do not need to
understand interfaces.

The body of the previous annotation definition contains _annotation type
element_ declarations, which look a lot like methods. Note that they can
define optional default values.

After the annotation type is defined, you can use annotations of that
type, with the values filled in, like this:

```java
@ClassPreamble (author = "John Doe", date = "3/17/2002", currentRevision = 6,
                lastModified = "4/12/2004", lastMonifiedBy = "Jane Doe",
                // Note array notation                
                reviewers = {"Alice", "Bob", "Cindy"})
public class Generation3List extends Generation2List {}
```

**Note:** To make the information in `@ClassPreamble` appear in
Javadoc-generated documentation, you must annotate the `@ClassPreamble`
definition with the `@Documented` annotation:

```java
// import this to use @Documented
import java.lang.annotation.*;

@Documented
@interface ClassPreamble {}
```
