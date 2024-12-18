'use client'


import {useEffect} from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


function AboutMe() {
    useEffect(() => {
        const box = document.getElementById('box')

        gsap.to(box, {
            x: 1000,
            rotation: 360,
            duration: 4,
            ease: "power1.out",
            scrollTrigger: {
                trigger: box,
                markers: true,
                toggleActions: "play pause resume reverse",
                scrub: true,
            }
        })
    }, []);
    return (
        <div
            className="bg-black w-full h-auto p-2 flex flex-col items-start justify-center"
        >
            <div className="w-[500px] flex ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nam, totam? Ab accusamus accusantium
                adipisci aliquid amet consectetur cupiditate esse est explicabo in ipsum magni necessitatibus non
                obcaecati perspiciatis, possimus quaerat quam, quas quidem quod similique sit, soluta sunt unde
                veritatis voluptas voluptate? Aliquid, aspernatur consectetur cumque dolorem labore provident suscipit
                unde. Ab beatae doloribus ex, fugiat inventore nobis reprehenderit sapiente sit voluptatem! A, ad
                aliquam aperiam asperiores assumenda atque corporis culpa cupiditate doloribus earum eius enim esse
                excepturi exercitationem explicabo illum ipsum iste iure magnam natus necessitatibus nesciunt non
                numquam odio officia omnis quod reiciendis sint suscipit tempora veniam voluptates voluptatibus
                voluptatum! A accusamus amet consequuntur doloribus eaque eveniet fugiat illum ipsum maxime molestias
                neque nesciunt nihil non nostrum obcaecati, optio perspiciatis placeat quam quasi quia quisquam
                reiciendis sit! A atque consequuntur error eveniet maiores, necessitatibus numquam rerum sequi
                temporibus ut veniam veritatis. Aspernatur eius sed velit voluptatem! Adipisci alias facilis illum
                laboriosam magnam, natus rem rerum ullam veritatis. Accusamus ad animi architecto at commodi
                consequuntur cum delectus dolore et eum ex fuga harum laboriosam, minima nam non obcaecati placeat
                quaerat quod reprehenderit rerum sequi similique suscipit ullam voluptate. Ab at beatae cumque dolore
                dolorem doloribus earum eos eveniet ex expedita, fugit ipsum natus officia possimus suscipit voluptate
                voluptatum. Aliquid blanditiis delectus dignissimos facilis incidunt inventore maiores, modi numquam
                placeat porro provident qui repellat, sint unde voluptatum? Aut distinctio est eveniet harum libero
                mollitia non optio pariatur sit sunt. A iste qui quisquam rem vero. A, alias, aliquam aspernatur
                consequatur ducimus ea facere ipsa iste iusto maiores maxime molestiae molestias nesciunt nostrum odit
                perferendis praesentium quasi qui quia quidem recusandae rem, repudiandae suscipit totam vel. Architecto
                consectetur dicta ea eaque facilis id iure magni, maxime nisi omnis, possimus quo ratione recusandae,
                repellendus totam vel veniam! Aperiam commodi cupiditate excepturi laboriosam tempora. Accusamus
                explicabo labore maiores nemo possimus repellendus rerum voluptatibus? Deserunt doloribus esse fuga
                minus quae quasi veniam! Adipisci alias dolores enim, impedit iusto porro quidem quos. Blanditiis
                deserunt doloremque eaque est inventore itaque minus nobis nostrum odit quas quo similique, sit velit
                voluptas voluptatem. A amet commodi, cum doloremque eos error esse eveniet hic, id illo, inventore iste
                laboriosam minima minus nam natus nesciunt numquam officiis optio pariatur provident quae quisquam
                reiciendis sequi sit soluta tempore tenetur unde veniam veritatis voluptas voluptatem voluptates
                voluptatum. Autem explicabo obcaecati quis sequi voluptas? At blanditiis excepturi laboriosam laudantium
                nemo pariatur provident quam sunt tempore voluptas? Autem beatae commodi eligendi eos error. Aliquid
                aperiam dolorem eaque esse fuga fugit inventore iste labore magnam modi, nemo numquam optio pariatur
                quae quam quis sed. Accusamus assumenda blanditiis commodi facilis fugiat in ipsam, minima qui, quidem
                quod, reprehenderit sed! Ducimus magnam obcaecati pariatur repudiandae sit.
            </div>
            <div className="w-14 h-14 bg-red-500" id="box"></div>

        </div>
    );
}

export default AboutMe;
