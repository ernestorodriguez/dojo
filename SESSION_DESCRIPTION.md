# RPG Combat Kata
Objective: introduce Dojo dynamic, practice TTD, OOP, SOLID, BEST PRACTICES

This is a fun kata that has the programmer building simple combat rules, as for a role-playing game (RPG). It is implemented as a sequence of iterations. The domain doesn't include a map or any other character skills apart from their ability to damage and heal one another.

## ITERATIONS
### ONE

1. All Characters, when created, have:
    - Health, starting at 1000
    - Level, starting at 1
    - May be Alive or Dead, starting Alive (Alive may be a true/false)

2. Characters can Deal Damage to Characters.
  - Damage is subtracted from Health
  - When damage received exceeds current Health, Health becomes 0 and - the character dies
  
3. A Character can Heal a Character.
- Dead characters cannot be healed
- Healing cannot raise health above 1000

### TWO
1. A Character cannot Deal Damage to itself.
2. A Character can only Heal itself.
3. When dealing damage:
  -If the target is 5 or more Levels above the attacker, Damage is reduced by 50%
  -If the target is 5 or more levels below the attacker, Damage is increased by 50%

### THREE

A character can equip a sword and attack with it.
 - the damage amount should be based on the weapon damage but add any other current modification

A character can equip a shield 
- the damage amount applied should subtract the percentage of shield  protection


A sword or shield can have an Elemental modifier.
- a character using a fire Sword against a  fire shield has reduced damage 50%
- a character using a fire Sword against an ice shield has 150% increased damage
- a character using a fire Sword against a standard shield have 200% increased damage

- a character using a Ice Sword against a  Ice shield has reduced damage 50%
- a character using a Ice Sword against an fire shield has 50% reduce damage
- a character using a Ice Sword against a standard shield have 200% increased damage


