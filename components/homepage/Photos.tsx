// import clsx from 'clsx'
// import React from 'react'
// import { AnimatePresence, motion } from 'framer-motion'
// import Image, { type StaticImageData } from 'next/image'
// import { useState } from 'react'

// import { travelImages } from '../travel'

// const possibleRotations = [1.3, -1.3, 1.3, -1.3, 1.3, -1.3]

// const Photo = ({
//   img,
//   title,
//   alt,
//   idx,
// }: {
//   img: StaticImageData
//   title: string
//   alt: string
//   idx: number
// }) => {
//   const [isVisible, setIsVisible] = useState(false)

//   return (
//     <motion.div
//       key={img.src}
//       initial={{ scale: 1, rotate: possibleRotations[idx % possibleRotations.length], opacity: 0 }}
//       whileHover={{ scale: 1.1, rotate: 0, transition: { duration: 0.2 } }}
//       whileInView={{ opacity: 1, transition: { delay: idx / 100 } }}
//       viewport={{ once: true }}
//       onHoverStart={() => setIsVisible(true)}
//       onHoverEnd={() => setIsVisible(false)}
//       className={clsx(
//         'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800'
//       )}
//     >
//       <Image
//         key={img.src}
//         src={img}
//         alt={alt}
//         sizes="(min-width: 640px) 18rem, 11rem"
//         className="absolute inset-0 h-full w-full object-cover"
//         // placeholder="blur"
//         fill
//       />
//       <AnimatePresence key={img.src}>
//         {isVisible && (
//           <motion.div
//             key={img.src}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1, transition: { duration: 0.2 } }}
//             exit={{ opacity: 0 }}
//             className="absolute inset-0 w-full bg-gradient-to-t from-black/75 via-black/0 flex items-end"
//           >
//             <h3 className="px-3 py-2 font-mono text-xs font-bold">{title}</h3>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   )
// }

// export const Photos = () => {
//   return (
//     <div className="my-8 mt-16 sm:mt-20">
//       <div className="hide-scrollbar -my-4 flex justify-center gap-5 py-4 sm:gap-8">
//         {travelImages.map((travelImage, index) => (
//           <Photo
//             key={travelImage.img.src}
//             img={travelImage.img}
//             title={travelImage.title}
//             alt={travelImage.alt}
//             idx={index}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }
