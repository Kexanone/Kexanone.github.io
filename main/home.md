---
permalink: /home/
---

# Achilles
Some content..
**markdown**
```sqf
[] spawn {
    //player in thislist;
    while {true} do {
        Mortar1 commandArtilleryFire [getposatl (thislist select 0), "rhs_mag_3vo18_10", 1]; 
    sleep 5;
};
// sleep 5; Why sleep here if your code never reaches this place?? 
};
```
