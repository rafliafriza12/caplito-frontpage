"use client";
import { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "@/components/atoms/lottie/BUMI.json";

export default function BumiAnimation() {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  // Konfigurasi
  //   const SLOW_START_FRAME = 0;
  //   const SLOW_END_FRAME = 10;
  //   const SLOW_DURATION = 300; // durasi untuk frame 0-6 dalam milidetik (sesuaikan sesuai keinginan)
  //   const NORMAL_SPEED = 0.8; // kecepatan normal untuk frame setelahnya

  //   useEffect(() => {
  //     const lottie = lottieRef.current;
  //     if (!lottie) return;

  //     // Pause animasi di awal
  //     lottie.pause();

  //     let currentFrame = SLOW_START_FRAME;
  //     const totalSlowFrames = SLOW_END_FRAME - SLOW_START_FRAME;
  //     const frameInterval = SLOW_DURATION / totalSlowFrames;

  //     // Jalankan frame 0-6 dengan kecepatan lambat
  //     const slowInterval = setInterval(() => {
  //       if (currentFrame <= SLOW_END_FRAME) {
  //         lottie.goToAndStop(currentFrame, true);
  //         currentFrame++;
  //       } else {
  //         clearInterval(slowInterval);
  //         // Setelah frame 6, lanjutkan dengan kecepatan normal
  //         lottie.setSpeed(NORMAL_SPEED);
  //         lottie.goToAndPlay(SLOW_END_FRAME + 1, true);
  //       }
  //     }, frameInterval);

  //     return () => {
  //       clearInterval(slowInterval);
  //     };
  //   }, []);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={true}
      onEnterFrame={(state: any) => {
        const currentFrame = state.currentTime;
        // Jika berada di segment 0-31, percepat jadi 2x (agar berdurasi 1 detik)
        if (currentFrame >= 0 && currentFrame <= 105) {
          lottieRef.current?.setSpeed(3);
        }
        // Jika sudah lewat frame 31, balikkan ke kecepatan normal
        else {
          lottieRef.current?.setSpeed(0.8);
        }
      }}
      autoplay={true}
    />
  );
}
