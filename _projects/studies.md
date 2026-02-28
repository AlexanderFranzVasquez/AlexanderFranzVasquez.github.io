---
layout: page
title: Advanced Control and Robotics Studies
description: Hybrid dynamics, constrained optimization, and trajectory optimization studies
img: /assets/img/advanced_control_cover.png
importance: 2
category: research
---

## Overview

This project consolidates several advanced simulation-based studies in nonlinear control, hybrid locomotion modeling, constrained inverse kinematics, and trajectory optimization.

Each study focuses on mathematical modeling, numerical implementation, and simulation-based validation.

---

# 1. Hybrid Locomotion Modeling – ALIP

Implementation and study of the Angular Momentum Linear Inverted Pendulum (ALIP) model for step-to-step locomotion analysis.

This implementation replicates and analyzes the reduced-order locomotion framework presented by Y. Gong and J. W. Grizzle in their work on zero dynamics and angular momentum in bipedal locomotion.

**Technical Highlights**
- Closed-form discrete dynamics
- Hybrid reset map
- Momentum-based foot placement control
- Velocity tracking across multiple steps
- 2D animated walking simulation

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/alip_simulation.png"
    title="ALIP step-to-step simulation"
    class="img-fluid rounded z-depth-1" %}
  </div>
</div>

- 🎥 [Simulation Video](/assets/videos/alip_video.mp4)

---
---

* Reference *

Gong, Y., & Grizzle, J. W.  
*Zero Dynamics, Pendulum Models, and Angular Momentum in Feedback Control of Bipedal Locomotion.*

# 2. Constrained Inverse Kinematics – Robotic Arm

Two optimization-based IK formulations were implemented.

### IK via Quadratic Programming (IK-QP)
- Linearized differential kinematics
- QP formulation with constraints
- Regularization and smooth motion

### IK via Nonlinear Programming (IK-NLP)
- Full nonlinear optimization
- Obstacle avoidance constraint
- End-effector trajectory shaping

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/arm_ik_sim.png"
    title="Manipulator trajectory with obstacle avoidance"
    class="img-fluid rounded z-depth-1" %}
  </div>
</div>

- 🎥 [IK-QP Video](/assets/videos/ik_qp.mp4)
- 🎥 [IK-NLP Video](/assets/videos/ik_nlp.mp4)

---

# 3. Trajectory Optimization – Direct Collocation

Implementation and numerical study of trajectory optimization using direct collocation methods.

The formulation, discretization, and nonlinear programming structure were replicated from the tutorial developed by Matthew Kelly.

**Features**
- Discretized nonlinear dynamics
- Equality constraints for system evolution
- Nonlinear programming formulation
- Numerical optimal control solution

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/direct_collocation.png"
    title="Direct collocation trajectory solution"
    class="img-fluid rounded z-depth-1" %}
  </div>
</div>

- 🎥 [Optimization Result Video](/assets/videos/direct_collocation.mp4)

---

---

* Reference *

Kelly, M.  
*An Introduction to Trajectory Optimization: How to Do Your Own Direct Collocation.*  
https://www.matthewpeterkelly.com/tutorials/trajectoryOptimization/index.html

# 4. Multibody Simulation – Self-Balancing Robot

Dynamic modeling and PID control of a self-balancing robot.

**Implemented in**
- ODE45 simulation
- Simscape Multibody

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/self_balancing_simscape.png"
    title="Simscape model of self-balancing robot"
    class="img-fluid rounded z-depth-1" %}
  </div>
</div>

- 🎥 [Simulation Video](/assets/videos/self_balancing.mp4)

---

## Technical Focus

- Hybrid dynamical systems
- Reduced-order locomotion models
- Constrained optimization
- Quadratic programming
- Nonlinear programming
- Trajectory optimization
- Multibody simulation

## Repository

The complete source code for all studies is available on GitHub:

**Advanced Control and Robotics Studies**  

- 💻 [Source Code (GitHub)](https://github.com/AlexanderFranzVasquez/advanced-control-and-robotics-studies.git)
