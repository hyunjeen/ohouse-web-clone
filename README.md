# 오늘의집 클론 - FRONT END

### 사용한 스택


![Nextjs](https://img.shields.io/badge/Nextjs-000000.svg?&style=for-the-badge&logo=Next.js&logoColor=white)
![react](https://img.shields.io/badge/react-61DAFB.svg?&style=for-the-badge&logo=react&logoColor=white)
![tailwindcss](https://img.shields.io/badge/tailwindcss-06B6D4.svg?&style=for-the-badge&logo=tailwindcss&logoColor=white)
![reacthookform](https://img.shields.io/badge/reacthookform-EC5990.svg?&style=for-the-badge&logo=reacthookform&logoColor=white)
![swiper](https://img.shields.io/badge/swiper-6332F6.svg?&style=for-the-badge&logo=swiper&logoColor=white)
![redux](https://img.shields.io/badge/redux-764ABC.svg?&style=for-the-badge&logo=redux&logoColor=white)

### FEATURE
# 1
[x] 메뉴 상태 새로고침시에도 저장 하는기능 구현 

![](https://user-images.githubusercontent.com/101567520/244037764-b8817a1c-6b35-48fd-a529-1c81f851c89a.gif)

**고려사항** : 새로고침시 상태를 저장할수있는방법 <br>
**해결방안** : 전역상태 redux-toolkit을 이용하여 현재 메뉴 상태를저장 <br>
session 스토리지를이용하여 새로고침시에도 메뉴상태 유지
# 2
[x] 스크롤링 상태에따른 true / false (불린값) 얻기 최적화중요!!

![](https://user-images.githubusercontent.com/101567520/244038250-3822501e-198b-4926-8533-5defbe43a85a.gif)

- 핵심코드 
```typescript
  const requestAnimation = debounce(() => {
    scrollHandler();
    requestRef.current = requestAnimationFrame(scrollHandler);
  }, delay);

  useEffect(() => {
    window.addEventListener('scroll', requestAnimation);
    return () => {
      window.removeEventListener('scroll', requestAnimation);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [requestAnimation]);
```
debounce함수와 requestanimation 함수를 섞어 구현  

# 3
[x] React-hook-form 과 yup을 이용한 폼 validator구현 

![](https://user-images.githubusercontent.com/101567520/244038283-e44c4815-fff2-4545-9708-30bb70845860.gif)