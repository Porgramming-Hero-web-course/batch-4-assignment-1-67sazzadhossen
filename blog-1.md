Typescript is a strongly typed language built on top of Javascript. This allows to catch the errors on the compiling time instead of those on the runtime. This way helps in minimizing the bug from our code. What we are going to learn in this lesson is the _Union and Intersection types_ in Typescript.

### **Union Types**

When you need to specify that the value can be a few types of different type — union types are used. The union types is declared with pipe symbol(`|`)

### **Syntax:**

```tsx
type TypeName = Type1 | Type2 | Type3;
```

### **Example:**

```tsx
function formatValue=(value:string|number):string => {

		return typeof value === 'string'? value: value. toString();

}
```

### **Intersection Types**

You can combine several types into an intersection type. An intersection type requires that a value satisfies all of the constituent types. An intersection type can be defined using the ampersand (`&`).

### **Syntax:**

```tsx
interface TypeName extends Type1, Type2, typeType3;
```

### **Example:**

```tsx
interface User {
  name: string;

  age: number;
}

interface Admin {
  role: string;
}

export type AdminUser = User & { admin: true };

let admin: AdminUser = {
  name: "John",

  age: 30,

  role: "Admin",
};
```

### Key Differences

Union Types (`|`): Either any one of the provided types Use case – when you need only one of the multiple possible values.

- Intersection Types (`&`): A variable has to be all the types specified in the intersection. Typically when you want to have a large number of properties from a multiple types but into one type.

### Practical Use Cases

- Union Types: Multiple types for a parameter (string or number)
- Intersection types: Creates a new type by using properties of multiple types (for example user data+roles)

They improve TypeScript's type system and adaptability to diverse and case-specific data.
