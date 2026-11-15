
#ifndef DEDAENA_ENGINE_MATH_H
#define DEDAENA_ENGINE_MATH_H

namespace Dedaena {

    struct Vec3 {
        float x, y, z;

        Vec3();

        Vec3(
            float px,
            float py,
            float pz
        );

        Vec3 operator+(const Vec3& other) const;

        Vec3 operator-(const Vec3& other) const;

        Vec3 operator*(float scalar) const;

        float length() const;

        Vec3 normalized() const;
    };

    struct PhysicsBody {

        Vec3 position;
        Vec3 velocity;

        float gravity;

        bool grounded;

        PhysicsBody();

        void update(float deltaSeconds);

        void jump(float impulse);
    };
}

#endif

