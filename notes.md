# motivation

some thoughts on motivation here, and overall goals

in no particular order:
- it can be interesting to see your API without the harness in the way
- it's a powerful path to 'package' a mature framework as a language
  - you unlock new/interesting capabilities that can feed back into the framework
  - also again you get to interact with your system without a lot of controls/knobs in the way

in particular around cy:
- it seems interesting to fully externalize testing frameworks this way
  - on the one hand: you are definitely not tautologically testing your code, since you're isolated
  - on the other hand: 
    - compiling to JS seems a powerful way to generate large amounts of correct test cases...
    - ...and machine-generated code will stress your framework in a way that humans won't somehow
- overall 'compiling to cy' seems neat

maybe more generally:
- a language centered around web testing seems plausibly very powerful in terms of an accelerant for web dev cycle
- the quicker i can express the business requirements in terms of a validating script...
- there's something about the simplicity that i'm seeing already that's kind of eye-opening
- again it's often just interesting to see your framework without the language in the way (without 'cy.' everywhere)
- in general it's a useful exercise to go through *some* formal modelling process, and agile language design is a powerful tool there

# goals

first some antigoals...
- not going to attempt to tackle even a significant percent of the surface area of cy, it's enormous
  (so: go for a handful of commands, ensure they compose, ensure i can construct valid test cases)
- not going to try to model promises or other exotic structural/functional features of JS
  (at the limit since we're compiling down we could 'just' emit similar structures but even modelling
  some of these things seems pretty far -- even objects feels like a stretch but it may be needed sooner-than-later)

okay, so with all that in mind:
- we're going to tackle find/get/click sort of basics
- we're going to try to model simple assignment, and passing variables into browser operation functions
- i'm thinking SQL as a kind of model here (cy is essentially a query lang for the browser, we're just unleashing it!)