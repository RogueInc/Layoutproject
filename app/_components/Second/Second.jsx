
import styles from "./Second.module.css";
import Cardformat from "./Card";
import Image from "next/image";
export default function Second() {
    const Cards = [
      {
        key: 1,
        Image:
          "https://images.pexels.com/photos/18226128/pexels-photo-18226128/free-photo-of-young-fashionable-woman-walking-on-the-street-and-looking-over-her-shoulder.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      },
      {
        key: 2,
        Image:
          "https://images.pexels.com/photos/18791598/pexels-photo-18791598/free-photo-of-a-girl-sitting-on-a-concrete-ledge-with-her-legs-crossed.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      },
      {
        key: 3,
        Image:
          "https://images.pexels.com/photos/18386361/pexels-photo-18386361/free-photo-of-fashion-love-people-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      },
    ];

  const Cardlist= Cards.map(Card=>(
    <Cardformat key={Card.id} Image={Card.Image}/>
  ))
  return (
    <section className={styles.second}>
      <div className={styles.leftsecond}>
        <h1 className={styles.lefttext}>
          Dolore eiusmod culpa consectetur id amet laborum amet.
        </h1>
        <center>
          <svg
            width="495"
            height="442"
            viewBox="0 0 495 442"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id={styles.circlesvg}
          >
            <ellipse
              cx="134.532"
              cy="138.245"
              rx="134.532"
              ry="133.245"
              fill="url(#paint0_radial_1_6)"
            />
            <circle cx="347" cy="148" r="148" fill="url(#paint1_radial_1_6)" />
            <ellipse
              cx="222.532"
              cy="308.245"
              rx="134.532"
              ry="133.245"
              fill="url(#paint2_radial_1_6)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_1_6"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(134.532 138.245) rotate(90) scale(133.245 134.532)"
              >
                <stop offset="0.745833" stop-color="#E7E77E" />
                <stop offset="1" stop-color="#E7E77E" stop-opacity="0" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_1_6"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(347 148) rotate(90) scale(148)"
              >
                <stop offset="0.69375" stop-color="#FFC0CB" />
                <stop offset="0.948958" stop-color="#FFC0CB" stop-opacity="0" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_1_6"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(222.532 308.245) rotate(90) scale(133.245 134.532)"
              >
                <stop
                  offset="0.719791"
                  stop-color="#C76DC7"
                  stop-opacity="0.73"
                />
                <stop offset="0.9125" stop-color="#C76DC7" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </center>
      </div>
      <div className={styles.rightsecond}>
        <div className={styles.right1}>
          {/* <Image src={'https://cdn.pixabay.com/photo/2013/07/07/01/21/blue-143734_1280.jpg'}     width="0"
    height="0"
    sizes="100vw"
    style={{ width: '100%', height: '100%',objectFit:'cover'}}></Image> */}
          {Cardlist}
        </div>
        <div className={styles.right2}>
          <center>
          <div className={styles.leftbox}>
            <Image src={'https://images.pexels.com/photos/2183131/pexels-photo-2183131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            className={styles.right2img}
            layout="fill"
            objectFit="cover"></Image>
            <div className={styles.glass2}>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolore laudantium illo sit amet. Atque repudiandae, labore ratione ad unde eveniet officiis recusandae iusto voluptatem debitis quia consectetur dolores ipsa?</h1>
            </div>
          </div>
          </center>
        </div>
      </div>
    </section>
  );
}
