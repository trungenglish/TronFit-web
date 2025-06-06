# 📁 Project Folder Structure Guide

Dưới đây là mô tả chi tiết các thư mục và vai trò của chúng trong dự án:

## ✅ app/
Chứa toàn bộ định nghĩa routing theo cấu trúc App Router (Next.js 13+).

- `page.tsx`: File hiển thị nội dung chính của route.
- `layout.tsx`: Dùng để wrap các trang con trong cùng một layout.
- `loading.tsx`: Skeleton khi đang tải trang.
- `error.tsx`: Hiển thị khi có lỗi xảy ra.

> Lưu ý: KHÔNG viết logic phức tạp ở đây, chỉ gọi các component từ `features/` hoặc `components/`.

---

## ✅ features/
Tập trung xử lý logic cho từng "domain" hoặc "feature" trong app (modular structure).

Ví dụ: `features/auth/`, `features/user/`

Trong mỗi feature thường có:
- `components/`: Các UI component liên quan riêng đến feature.
- `services/`: Gọi API, xử lý dữ liệu liên quan đến feature.
- `hooks/`: Các custom hook dành riêng cho feature.

---

## ✅ components/
Chứa các UI component **dùng chung toàn dự án**, không phụ thuộc vào bất kỳ feature cụ thể nào.

Ví dụ: `Button`, `Modal`, `Header`, `Footer`, `Avatar`,...

---

## ✅ hooks/
Custom hooks **dùng chung toàn app**, ví dụ: `useDebounce`, `useLocalStorage`, `useOutsideClick`.

---

## ✅ lib/
Thư viện các tiện ích cấu hình logic không phụ thuộc UI.

Ví dụ:
- `axiosConfig.ts`: Cấu hình interceptor cho axios.
- `formSchema.ts`: Cấu trúc validation form.

---

## ✅ services/
Các API hoặc hàm logic **dùng chung giữa nhiều feature** (nếu không thuộc 1 feature cụ thể).

Ví dụ:
- `authService.ts`
- `uploadService.ts`

---

## ✅ store/
Lưu trữ global state dùng cho Redux, Zustand hoặc các state manager khác.

Ví dụ:
- `authSlice.ts`
- `cartStore.ts`

---

## ✅ styles/
Lưu các global CSS, Tailwind config, biến SCSS nếu có.

---

## ✅ utils/
Chứa các hàm tiện ích thuần JavaScript.

Ví dụ:
- `formatDate.ts`
- `generateUUID.ts`
- `calculateDiscount.ts`

---

## ✅ types/
Chứa toàn bộ `interface`, `type`, và `enum` dùng toàn dự án.

Ví dụ:
- `types/user.ts`
- `types/product.ts`

---

## ✅ constants/
Chứa các giá trị cố định không thay đổi:
- `ROUTES`, `ROLES`, `STATUS`, `ERROR_MESSAGE`, ...

Ví dụ:
```ts
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
};
