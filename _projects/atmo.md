---
layout: page
title: ATM0 – Hybrid Ground–Aerial Robotic Prototype
description: Course-based implementation inspired by the ATMO morphobot architecture
img: /assets/img/atmo_cad.png
importance: 2
category: work
---

## Overview

This project consisted of a course-based implementation conceptually inspired by the ATMO morphobot architecture (Mandralis et al., 2025). Rather than introducing a novel morphing mechanism, the objective was to investigate mechanical integration challenges, manufacturability constraints, and structural feasibility within an academic prototyping framework.

My primary contribution focused on the mechanical system architecture, CAD modeling, and structural design of the platform.

---

## Research Context

The architectural concept draws inspiration from:

Mandralis, I., Nemovi, R., Ramezani, A., Murray, R. M., & Gharib, M. (2025).  
*ATMO: A morphobot capable of dynamic ground–air transition.*  
Communications Engineering, 4, 74.  
https://doi.org/10.1038/s44172-025-00413-6  

While the published work presents a research-grade morphobot capable of dynamic transitions, this project focused on exploring the mechanical feasibility of a conceptually related architecture within the scope and constraints of a course-based prototype.

---

## Mechanical Architecture

The platform integrates:

- Quadrotor propulsion module  
- Ground support structure  
- Central modular electronics housing  
- 3D-printed structural components  

Design considerations included:

- Structural rigidity under thrust loads  
- Weight distribution and center-of-mass alignment  
- Modular assembly for rapid prototyping  
- Mechanical integration of propulsion and support mechanisms  

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid 
       path="assets/img/atmo_cad.png"
       title="Hybrid ground–aerial mechanical architecture (CAD model)"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
Complete CAD model of the hybrid mobility platform.
</div>

---

## Prototype Fabrication

A full-scale prototype was manufactured and assembled using rapid prototyping techniques. Structural components were fabricated primarily through 3D printing and integrated with propulsion hardware.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid 
       path="assets/img/atmo_lab.jpg"
       title="Prototype during laboratory assembly and integration"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
Physical prototype during mechanical integration.
</div>

---

## Experimental Evaluation

The prototype underwent preliminary testing under controlled and outdoor conditions, including:

- Static load validation (1 kg – 9 kg)  
- Ground-to-air transition attempts  
- Preliminary takeoff and landing tests  

Indoor testing enabled partial transition under constrained environments. Outdoor experiments highlighted stability limitations under uneven terrain and current mass distribution.

These observations provided insight into mechanical integration challenges and practical constraints associated with hybrid morphing platforms.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid 
       path="assets/img/atmo_field.jpg"
       title="Outdoor transition and preliminary flight testing"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
Outdoor experimental evaluation of transition attempts and flight behavior.
</div>

---

## Project Scope

This was a collaborative course-based project. My primary responsibility was mechanical architecture design and CAD modeling. Electronics integration and low-level control implementation were developed by other team members.

---

🎥 **Video Demonstration:**  
https://youtu.be/Oec5UXYrKRQ