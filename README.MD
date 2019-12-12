# Reproduce bug

```
yarn
```

Then check `src/index.tsx`. The line with `store.` is expected to suggest functions like `query`, `subscribe`, etc.

Tested with 

```
IntelliJ IDEA 2019.3 (Ultimate Edition)
Build #IU-193.5233.102, built on November 27, 2019
Runtime version: 11.0.4+10-b520.11 x86_64
VM: OpenJDK 64-Bit Server VM by JetBrains s.r.o
macOS 10.14.6
GC: G1 Young Generation, G1 Old Generation
Memory: 4048M
Cores: 16
Registry: documentation.show.toolbar=true
```
