import { Link } from "react-router-dom";

export const NotFoundPage = () => (
  <div className="text-center py-20">
    <div className="text-6xl mb-3">🗺️</div>
    <h1 className="font-display font-bold text-2xl">Lạc đường rồi!</h1>
    <p className="text-ink-500 mt-2">Trang anh tìm không tồn tại.</p>
    <Link
      to="/"
      className="inline-block mt-4 px-5 py-2 rounded-xl bg-quest-500 text-white font-semibold hover:bg-quest-400"
    >
      ← Về bản đồ
    </Link>
  </div>
);
