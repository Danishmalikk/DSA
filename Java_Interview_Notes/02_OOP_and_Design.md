# Java Interview Notes — OOP & Design Principles

> Simple-language notes for interview revision. Read top to bottom.

---

## 1. The 4 Pillars of OOP

OOP = Object-Oriented Programming = organizing code around **objects** (real-world things) instead of just functions. The 4 pillars are the foundation.

Memory trick: **"A PIE"** → **A**bstraction, **P**olymorphism, **I**nheritance, **E**ncapsulation.

### Pillar 1 — Abstraction (hide complexity, show only what's needed)
Show **what** something does, hide **how** it does it.
Real life: You drive a car using the steering and pedals. You don't know how the engine works internally. The engine details are *abstracted* away.

```java
abstract class Car {
    abstract void start();   // WHAT it does, not HOW
}
class Tesla extends Car {
    void start() { System.out.println("Start silently"); }
}
```
Achieved using: **abstract classes** and **interfaces**.

### Pillar 2 — Encapsulation (data hiding + bundling)
Wrap data (variables) + methods together in one class, and **protect** the data using `private`. Outside code can only touch it through controlled methods (getters/setters).
Real life: A medicine capsule — the powder (data) is wrapped safely inside.

```java
class Account {
    private double balance;            // hidden (protected)
    public double getBalance() { return balance; }   // controlled read
    public void deposit(double amt) {                  // controlled write
        if (amt > 0) balance += amt;   // validation -> safety
    }
}
```
Benefit: you control how data is accessed/changed → fewer bugs.

### Pillar 3 — Inheritance (reuse code from a parent)
A child class **gets** the fields and methods of a parent class. Promotes reuse.
Real life: A child inherits features from parents.

```java
class Animal {
    void eat() { System.out.println("eating"); }
}
class Dog extends Animal {    // Dog inherits eat()
    void bark() { System.out.println("barking"); }
}
Dog d = new Dog();
d.eat();   // inherited
d.bark();  // own
```
`extends` keyword. "Dog **is-a** Animal" relationship.

### Pillar 4 — Polymorphism (one name, many forms)
Same method name behaves **differently** depending on the object.
Real life: The word "cut" — cut hair, cut a cake, cut a deal. Same word, different action.

Two types:
- **Compile-time (Overloading)** → same method name, different parameters.
- **Runtime (Overriding)** → child class changes parent's method behavior.

```java
class Animal { void sound(){ System.out.println("some sound"); } }
class Cat extends Animal { void sound(){ System.out.println("Meow"); } }

Animal a = new Cat();   // parent reference, child object
a.sound();              // "Meow" -> decided at RUNTIME
```

**Interview one-liner:** Abstraction hides complexity, Encapsulation protects data, Inheritance reuses code, Polymorphism = one name many forms (overloading at compile time, overriding at runtime).

---

## 2. SOLID Principles (with real examples)

SOLID = 5 design rules for clean, maintainable, flexible code. Each letter = one principle.

### S — Single Responsibility Principle (SRP)
A class should have **only ONE job / one reason to change.**

❌ Bad — one class doing everything:
```java
class User {
    void saveToDB() {}       // database job
    void sendEmail() {}      // email job
    void generateReport() {} // report job
}
```
✅ Good — split responsibilities:
```java
class UserRepository { void saveToDB() {} }
class EmailService   { void sendEmail() {} }
class ReportService  { void generateReport() {} }
```
Why: if email logic changes, you only touch `EmailService`, nothing else breaks.

### O — Open/Closed Principle (OCP)
Code should be **open for extension, closed for modification.**
You should add new features by **adding new code**, not editing old, working code.

❌ Bad — must edit existing method for each new shape:
```java
class AreaCalc {
    double area(Object shape) {
        if (shape instanceof Circle) {/*...*/}
        else if (shape instanceof Square) {/*...*/}  // keep editing this!
    }
}
```
✅ Good — extend by adding new classes:
```java
interface Shape { double area(); }
class Circle implements Shape { public double area(){ return 3.14*r*r; } }
class Square implements Shape { public double area(){ return s*s; } }
// New shape? Just add a new class. Don't touch existing code.
```

### L — Liskov Substitution Principle (LSP)
A child class should be **usable anywhere its parent is used**, without breaking things.
"If it looks like a duck but needs batteries, your abstraction is wrong."

❌ Bad — Penguin can't fly, breaks the parent's promise:
```java
class Bird { void fly() {} }
class Penguin extends Bird {
    void fly() { throw new RuntimeException("Can't fly!"); } // breaks LSP
}
```
✅ Good — separate the behavior:
```java
class Bird {}
class FlyingBird extends Bird { void fly() {} }
class Penguin extends Bird {}   // no fly() promise to break
```

### I — Interface Segregation Principle (ISP)
Don't force a class to implement methods it **doesn't need**. Prefer many small interfaces over one big fat interface.

❌ Bad — robot forced to implement eat():
```java
interface Worker { void work(); void eat(); }
class Robot implements Worker {
    public void work() {}
    public void eat() {}   // robots don't eat! useless method
}
```
✅ Good — split interfaces:
```java
interface Workable { void work(); }
interface Eatable  { void eat(); }
class Robot implements Workable { public void work() {} }   // only what it needs
```

### D — Dependency Inversion Principle (DIP)
Depend on **abstractions (interfaces)**, not on concrete classes.
High-level code shouldn't be glued to low-level details.

❌ Bad — class locked to MySQL directly:
```java
class Service {
    MySQLDatabase db = new MySQLDatabase();  // hard-wired
}
```
✅ Good — depend on an interface; swap implementations easily:
```java
interface Database { void save(); }
class MySQLDatabase implements Database { public void save() {} }
class MongoDatabase implements Database { public void save() {} }

class Service {
    private Database db;
    Service(Database db) { this.db = db; }   // inject any DB
}
```

**Interview one-liner:** SOLID = Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion — five rules that make code easy to change, extend, and test.

---

## 3. Composition over Inheritance

Two ways to reuse code between classes:
- **Inheritance** → "**is-a**" (Dog is-a Animal). Uses `extends`.
- **Composition** → "**has-a**" (Car has-a Engine). One class holds another as a field.

### Why prefer Composition?
Inheritance creates **tight coupling** — child is locked to parent. Change the parent → can break all children. Also Java allows only **one** parent class (single inheritance).

Composition is **flexible** — you plug in behaviors and can swap them anytime.

❌ Inheritance can go wrong:
```java
class Engine { void start(){} }
class Car extends Engine {}   // "Car is-a Engine"? No! Wrong relationship
```

✅ Composition (correct):
```java
class Engine { void start() { System.out.println("Engine started"); } }

class Car {
    private Engine engine = new Engine();   // Car HAS-A Engine
    void start() { engine.start(); }        // delegate to engine
}
```
Now you can swap `Engine` for `ElectricEngine` easily without changing the hierarchy.

**Rule of thumb:** Use inheritance only for a true "is-a" relationship. Otherwise use composition.

**Interview one-liner:** Composition (has-a) is more flexible than inheritance (is-a) because it avoids tight coupling and lets you swap behaviors at runtime. Prefer composition unless there's a genuine is-a relationship.

---

## 4. Abstract Class vs Interface (when to use what)

Both let you achieve abstraction, but they're used differently.

### Abstract class
- Declared with `abstract`. **Cannot be instantiated** (no `new`).
- Can have **both** abstract methods (no body) **and** normal methods (with body).
- Can have **constructors, fields (state), and any access modifiers**.
- A class can extend **only ONE** abstract class.
- Use when classes are **closely related** and share common code/state.

```java
abstract class Animal {
    String name;                         // state allowed
    abstract void sound();               // must be implemented by child
    void sleep() { System.out.println("sleeping"); }  // shared code
}
```

### Interface
- Declared with `interface`. A pure "contract" of what methods a class must have.
- Methods are `public abstract` by default. (Since Java 8 can have `default` and `static` methods with body; since Java 9 `private` methods too.)
- Variables are `public static final` (constants) by default.
- A class can implement **MANY** interfaces (solves multiple-inheritance).
- Use when **unrelated classes** share a common ability/behavior.

```java
interface Flyable { void fly(); }
interface Swimmable { void swim(); }
class Duck implements Flyable, Swimmable {   // multiple!
    public void fly()  { System.out.println("flying"); }
    public void swim() { System.out.println("swimming"); }
}
```

### Comparison
| Feature | Abstract Class | Interface |
|---------|----------------|-----------|
| Keyword | `abstract class` | `interface` |
| Multiple inheritance | ❌ only one | ✅ many |
| Fields/state | ✅ yes | ❌ only constants |
| Constructor | ✅ yes | ❌ no |
| Methods with body | ✅ yes | ✅ (default/static only) |
| When to use | Related classes sharing code | Unrelated classes sharing ability |

**Simple decision:**
- Need shared code/state + "is-a" family → **abstract class**.
- Need a capability many unrelated classes can have → **interface**.
- In doubt → prefer **interface** (more flexible).

**Interview one-liner:** Abstract class = partial implementation + state for closely related classes (single inheritance); Interface = pure contract of abilities for any classes (multiple inheritance). Use interface for "can-do", abstract class for "is-a" with shared code.

---

## 5. Cohesion & Coupling

These measure code quality. Goal: **High Cohesion, Low Coupling.**

### Cohesion — how focused a class is
How well the things inside a class **belong together**.
- **High cohesion (good)** → class does one clear job, all methods relate to it.
- **Low cohesion (bad)** → class does random unrelated things.

```java
// HIGH cohesion - everything about a calculator
class Calculator {
    int add(int a,int b){return a+b;}
    int sub(int a,int b){return a-b;}
}

// LOW cohesion - unrelated mess
class Utility {
    int add(int a,int b){return a+b;}
    void sendEmail(){}
    void connectDB(){}   // why is this here?!
}
```

### Coupling — how dependent classes are on each other
How much one class **relies on** another.
- **Low coupling (good)** → classes are independent; changing one doesn't break others.
- **High coupling (bad)** → classes tangled together; one change breaks many.

```java
// HIGH coupling - A creates and depends on exact B
class A { B b = new B(); }

// LOW coupling - A depends on an interface, not a fixed class
class A {
    private Service s;
    A(Service s){ this.s = s; }   // inject any Service
}
```

**Why it matters:** High cohesion + low coupling = code that is easy to read, test, reuse, and change without surprises.

**Interview one-liner:** Cohesion = how focused one class is (want high); Coupling = how dependent classes are on each other (want low). Aim for high cohesion, low coupling.

---

## 6. DRY, KISS, YAGNI

Three short rules to keep code clean.

### DRY — Don't Repeat Yourself
Don't copy-paste the same logic in many places. Write it **once**, reuse it.
If you change repeated code, you'd have to change it everywhere = bugs.

❌ Repeated:
```java
double tax1 = price1 * 0.18;
double tax2 = price2 * 0.18;   // same logic copied
```
✅ DRY:
```java
double tax(double price){ return price * 0.18; }   // one place
```

### KISS — Keep It Simple, Stupid
Write the **simplest** solution that works. Don't over-engineer or be clever for no reason. Simple code = easy to read and maintain.

❌ Over-complicated:
```java
boolean isEven(int n){ return ((n & 1) == 0) ? true : false; }
```
✅ Simple:
```java
boolean isEven(int n){ return n % 2 == 0; }
```

### YAGNI — You Aren't Gonna Need It
Don't build features "just in case" for the future. Only build what's needed **now**. Extra unused code = wasted effort + more bugs to maintain.

Example: Don't add support for 10 payment methods when the app only uses one. Add them when actually required.

**Interview one-liner:** DRY = no duplicate code (reuse it); KISS = keep solutions simple; YAGNI = don't build features you don't need yet.

---

## 7. Method Overloading vs Overriding (runtime vs compile time)

Both involve methods with the same name — but they're very different.

### Overloading (compile-time polymorphism)
**Same method name, different parameters**, in the **same class**.
The compiler decides which one to call based on arguments → "compile-time".

```java
class Printer {
    void print(int a)          { System.out.println("int: " + a); }
    void print(String a)       { System.out.println("String: " + a); }
    void print(int a, int b)   { System.out.println("two ints"); }
}
```
Rules: must differ in number/type/order of parameters. Return type alone is NOT enough.

### Overriding (runtime polymorphism)
**Child class redefines a parent's method** with the **same signature** (same name + same parameters).
The actual object decides which version runs → "runtime".

```java
class Animal { void sound(){ System.out.println("some sound"); } }
class Dog extends Animal {
    @Override
    void sound(){ System.out.println("Bark"); }   // redefines parent's
}
Animal a = new Dog();
a.sound();   // "Bark" -> decided at RUNTIME by the object type
```
Rules: same signature, child can't reduce visibility, use `@Override` annotation.

### Comparison
| Feature | Overloading | Overriding |
|---------|-------------|------------|
| Where | Same class | Parent → Child |
| Parameters | Must differ | Must be same |
| Decided at | Compile time | Runtime |
| Type | Compile-time polymorphism | Runtime polymorphism |
| Inheritance needed? | No | Yes |

**Interview one-liner:** Overloading = same name, different parameters, same class, decided at compile time. Overriding = child redefines parent's same-signature method, decided at runtime.

---

## 8. Covariant Return Types

A nice rule connected to **overriding**.

When a child overrides a parent method, the child's method can **return a more specific (sub) type** than the parent's return type. That's "covariant".

```java
class Animal {
    Animal reproduce() { return new Animal(); }
}
class Dog extends Animal {
    @Override
    Dog reproduce() { return new Dog(); }   // returns Dog, not Animal -> allowed!
}
```
Here parent returns `Animal`, but `Dog`'s override returns `Dog` (a subclass of Animal). This is legal and avoids unnecessary casting.

**Why useful?** The caller gets the exact type back, no casting needed:
```java
Dog d = new Dog().reproduce();   // already a Dog, no cast required
```

**Rule:** the overriding method's return type must be the same as, or a **subtype** of, the parent's return type.

**Interview one-liner:** Covariant return type means an overriding method can return a subclass of the parent method's return type — avoids casting and makes APIs cleaner.

---

## 9. Static vs Instance (methods & variables)

The `static` keyword means something belongs to the **class itself**, not to individual objects.

### Instance members (default — per object)
Each object gets its **own copy**. Need an object to use them.
```java
class Student {
    String name;                  // instance variable (each student has own)
    void show(){ System.out.println(name); }  // instance method
}
Student s = new Student();   // need an object
s.name = "Ali";
s.show();
```

### Static members (shared — one for whole class)
**One copy shared** by all objects. Called using the **class name**, no object needed.
```java
class Counter {
    static int count = 0;         // shared by ALL objects
    Counter(){ count++; }
    static void show(){ System.out.println(count); }  // static method
}
new Counter(); new Counter();
Counter.show();   // 2  -> called via class name, no object
```

### Key differences
| Feature | Instance | Static |
|---------|----------|--------|
| Belongs to | Each object | The class |
| Copies | One per object | One shared |
| Called using | object reference | class name |
| Memory | Created with object (heap) | Loaded once when class loads |

### Important rules / gotchas
- A **static method CANNOT use instance variables/methods directly** (because no object exists). It can only use static members.
- An instance method **CAN** use static members.
- `main` is `static` → so JVM can run it without creating an object.
- Use static for things common to all objects (counters, constants, utility methods like `Math.max()`).

```java
class Demo {
    int x = 5;
    static void test() {
        // System.out.println(x);  // ERROR! static can't see instance x
    }
}
```

**Interview one-liner:** Instance members belong to each object (own copy, need an object); static members belong to the class (one shared copy, called by class name). Static methods can't directly access instance members.

---

## Quick Revision Cheat Sheet

- **4 Pillars (A PIE)**: Abstraction (hide), Polymorphism (many forms), Inheritance (reuse), Encapsulation (protect data).
- **SOLID**: Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion.
- **Composition (has-a)** > **Inheritance (is-a)** → more flexible, less coupling.
- **Abstract class** = shared code + state, single inheritance; **Interface** = pure contract, multiple inheritance.
- **Cohesion** high (focused class), **Coupling** low (independent classes).
- **DRY** (no repeat), **KISS** (keep simple), **YAGNI** (don't build unneeded stuff).
- **Overloading** = same name diff params, compile time; **Overriding** = child redefines parent, runtime.
- **Covariant return** = override can return a subclass type (no casting).
- **Static** = one shared copy, class-level; **Instance** = per-object; static can't touch instance members directly.
