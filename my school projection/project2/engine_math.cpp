
#include "engine_math.h"

#include <cmath>

namespace Dedaena {

    Vec3::Vec3()
        : x(0), y(0), z(0) {}

    Vec3::Vec3(
        float px,
        float py,
        float pz
    )
        : x(px), y(py), z(pz) {}

    Vec3 Vec3::operator+(const Vec3& o) const {
        return Vec3(
            x + o.x,
            y + o.y,
            z + o.z
        );
    }

    Vec3 Vec3::operator-(const Vec3& o) const {
        return Vec3(
            x - o.x,
            y - o.y,
            z - o.z
        );
    }

    Vec3 Vec3::operator*(float s) const {
        return Vec3(
            x * s,
            y * s,
            z * s
        );
    }

    float Vec3::length() const {
        return std::sqrt(
            x*x + y*y + z*z
        );
    }

    Vec3 Vec3::normalized() const {

        float len = length();

        if (len > 0.0001f) {
            return (*this) * (1.0f / len);
        }

        return Vec3();
    }

    PhysicsBody::PhysicsBody()
        : position(),
          velocity(),
          gravity(22.0f),
          grounded(false) {}

    void PhysicsBody::update(float dt) {

        if (dt < 0.0f) {
            return;
        }

        velocity.y -= gravity * dt;

        position = position + velocity * dt;

        if (position.y < 0.0f) {

            position.y = 0.0f;

            velocity.y = 0.0f;

            grounded = true;
        }
    }

    void PhysicsBody::jump(float impulse) {

        if (grounded) {

            velocity.y = impulse;

            grounded = false;
        }
    }
}
