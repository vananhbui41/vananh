"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [quote, setQuote] = useState("");

  const quotes: Record<string, string[]> = {
    happy: [
      "Hạnh phúc không phải là điều sẵn có. Nó đến từ hành động của bạn.",
      "Nụ cười là ngôn ngữ chung của hạnh phúc.",
      "Hãy sống như hôm nay là ngày tuyệt vời nhất!"
    ],
    sad: [
      "Buồn là một phần của cuộc sống, nhưng nó sẽ qua.",
      "Không sao cả khi bạn cảm thấy không ổn.",
      "Mỗi giọt nước mắt là một bước gần hơn đến sự chữa lành."
    ],
    neutral: [
      "Một ngày bình thường cũng là một ngày đáng quý.",
      "Không phải lúc nào cũng cần phải đặc biệt, đôi khi bình thường là đủ.",
      "Giữ cho tâm trí bình yên là một nghệ thuật."
    ],
    angry: [
      "Hít thở sâu, mọi chuyện rồi sẽ ổn.",
      "Giận dữ là ngọn lửa, hãy để nó nguội đi.",
      "Kiểm soát cảm xúc là sức mạnh thật sự."
    ]
  };

  function showQuote(mood: string) {
    const moodQuotes = quotes[mood];
    const randomQuote =
      moodQuotes[Math.floor(Math.random() * moodQuotes.length)];
    setQuote(randomQuote);
  }

  return (
    <div className={styles.container}>
      {!quote && (
        <div id="question-box" className={styles.fadeIn}>
          <h1 className={styles.title}>Hôm nay bạn cảm thấy thế nào?</h1>
          <div className={styles.buttons}>
            <button onClick={() => showQuote("happy")}>😊 Vui</button>
            <button onClick={() => showQuote("sad")}>😢 Buồn</button>
            <button onClick={() => showQuote("neutral")}>😐 Bình thường</button>
            <button onClick={() => showQuote("angry")}>😠 Bực bội</button>
          </div>
        </div>
      )}
      {quote && (
        <div id="quote-box" className={styles.fadeIn}>
          <p className={`${styles.quoteText} ${styles.quoteAnimate}`}>
            {quote}
          </p>
          <button onClick={() => setQuote("")}>🔁 Chọn lại</button>
        </div>
      )}
    </div>
  );
}
