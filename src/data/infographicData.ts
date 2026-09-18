import { Milestone, StatItem, Activity, ThreeConnections, CooperationPillar } from '../types';

export const HEADER_DATA = {
  mainTitle: "NHỮNG DẤU ẤN TRONG CHUYẾN THĂM VIỆT NAM CỦA NHÀ VUA THÁI LAN VÀ HOÀNG HẬU",
  subTitle: "Chuyến thăm cấp Nhà nước lịch sử từ ngày 14 đến 16-9-2026",
  invitation: "Theo lời mời của Tổng Bí thư, Chủ tịch nước Tô Lâm và Phu nhân",
  summary: "Hội tụ 3 dấu mốc đặc biệt, củng cố tin cậy chính trị, thắt chặt tình cảm giữa hai dân tộc và tạo động lực đưa quan hệ Đối tác Chiến lược toàn diện đi vào chiều sâu.",
  timeRange: "14 - 16 / 09 / 2026",
  level: "Chuyến thăm cấp Nhà nước",
  source: "Nội dung trả lời báo chí của Thứ trưởng Bộ Ngoại giao Nguyễn Mạnh Cường ngày 17-9-2026."
};

export const MILESTONES: Milestone[] = [
  {
    id: "first-visit",
    badge: "",
    title: "Chuyến thăm đầu tiên",
    subtitle: "",
    description: "Lần đầu tiên một Nhà vua Thái Lan thăm Việt Nam kể từ khi hai nước thiết lập quan hệ ngoại giao năm 1976.",
    iconName: "Crown",
    yearHighlight: "1976"
  },
  {
    id: "golden-jubilee",
    badge: "",
    title: "Kỷ niệm 50 năm",
    subtitle: "",
    description: "Diễn ra đúng dịp kỷ niệm 50 năm thiết lập quan hệ ngoại giao Việt Nam - Thái Lan (1976-2026).",
    iconName: "Sparkles",
    yearHighlight: "50 Năm"
  },
  {
    id: "new-strategic-framework",
    badge: "",
    title: "Nền tảng quan hệ mới",
    subtitle: "",
    description: "Diễn ra trong bối cảnh quan hệ hai nước đã được nâng cấp lên Đối tác Chiến lược toàn diện vào tháng 5-2025.",
    iconName: "ShieldCheck",
    yearHighlight: "05/2025"
  }
];

export const STATS: StatItem[] = [
  {
    id: "trade",
    value: 22.1,
    suffix: "tỷ USD",
    decimals: 1,
    label: "Kim ngạch thương mại hai chiều (2025)",
    highlightText: "Đối tác lớn nhất trong ASEAN",
    icon: "CircleDollarSign",
    detail: "Thái Lan là đối tác thương mại lớn nhất của Việt Nam trong ASEAN."
  },
  {
    id: "fdi",
    value: 15,
    prefix: "Hơn ",
    suffix: "tỷ USD",
    decimals: 0,
    label: "Tổng vốn đăng ký đầu tư FDI tại Việt Nam",
    highlightText: "Top 10 nhà đầu tư ngoại lớn nhất",
    icon: "DollarSign",
    detail: "Thái Lan thuộc nhóm 10 nhà đầu tư nước ngoài lớn nhất tại Việt Nam."
  },
  {
    id: "tourism",
    value: 1.1,
    prefix: "Hơn ",
    suffix: "triệu lượt",
    decimals: 1,
    label: "Người dân hai nước đến thăm đất nước của nhau trong năm 2025.",
    highlightText: "Cầu nối du lịch gắn kết",
    icon: "PlaneTakeoff",
    detail: ""
  },
  {
    id: "community",
    value: 100000,
    prefix: "Hơn ",
    suffix: "người Việt Nam",
    decimals: 0,
    label: "Đang sinh sống, học tập, làm việc tại Thái Lan.",
    highlightText: "Gắn kết văn hóa và hướng về Tổ quốc",
    icon: "Users",
    detail: ""
  }
];

export const ACTIVITIES: Activity[] = [
  {
    id: "act-1",
    timeframe: "Cấp cao",
    title: "Hội đàm với Tổng Bí thư, Chủ tịch nước Tô Lâm.",
    role: "Tổng Bí thư, Chủ tịch nước Tô Lâm",
    category: "chinh-tri",
    description: "Hội đàm trang trọng, trao đổi sâu rộng về định hướng chiến lược đưa quan hệ Đối tác Chiến lược toàn diện phát triển vững mạnh và hiệu quả.",
    significance: "Củng cố mức độ tin cậy chính trị cao nhất giữa hai nhà nước."
  },
  {
    id: "act-2",
    timeframe: "Cấp cao",
    title: "Hội kiến Thủ tướng Lê Minh Hưng và Chủ tịch Quốc hội Trần Thanh Mẫn.",
    role: "Thủ tướng Lê Minh Hưng & Chủ tịch Quốc hội Trần Thanh Mẫn",
    category: "chinh-tri",
    description: "Thống nhất các giải pháp thực chất thúc đẩy trụ cột hợp tác kinh tế, thương mại, đầu tư, lập pháp và giao lưu nhân dân.",
    significance: "Tạo hành lang đồng bộ giữa hành pháp và lập pháp hai quốc gia."
  },
  {
    id: "act-3",
    timeframe: "Tưởng niệm",
    title: "Viếng Lăng Chủ tịch Hồ Chí Minh; đặt vòng hoa tại Đài tưởng niệm các Anh hùng liệt sĩ trên đường Bắc Sơn, Hà Nội.",
    role: "Lăng Chủ tịch Hồ Chí Minh & Đài tưởng niệm Bắc Sơn",
    category: "chinh-tri",
    description: "Tưởng nhớ công lao to lớn của Chủ tịch Hồ Chí Minh và các Anh hùng liệt sĩ đã hy sinh vì độc lập dân tộc.",
    significance: "Thể hiện sự tôn kính sâu sắc và tình hữu nghị truyền thống lâu đời."
  },
  {
    id: "act-4",
    timeframe: "Văn hóa - Tâm linh",
    title: "Thăm chùa Quán Sứ, dự Lễ cầu an.",
    role: "Trung ương Giáo hội Phật giáo Việt Nam",
    category: "van-hoa",
    description: "Viếng thăm ngôi cổ tự tiêu biểu của Phật giáo Việt Nam, tôn vinh nét tương đồng văn hóa và sự kết nối tâm linh sâu sắc giữa hai dân tộc theo đạo Phật.",
    significance: "Gắn kết văn hóa tâm linh và giá trị hòa bình hữu nghị."
  },
  {
    id: "act-5",
    timeframe: "Giáo dục - Thế hệ trẻ",
    title: "Thăm Trường Đại học Hà Nội và Trung tâm Ngôn ngữ - Văn hóa Thái Lan.",
    role: "Trường Đại học Hà Nội",
    category: "giao-duc",
    description: "Gặp gỡ giảng viên, sinh viên Việt Nam theo học tiếng Thái; động viên phong trào dạy và học ngôn ngữ, tăng cường hiểu biết song phương.",
    significance: "Ươm mầm giao lưu văn hóa và hữu nghị cho các thế hệ tương lai."
  }
];

export const THREE_CONNECTIONS: ThreeConnections[] = [
  {
    number: 1,
    title: "Kết nối chuỗi cung ứng",
    subtitle: "Supply Chain Integration",
    detail: "Tạo lập mạng lưới sản xuất và cung ứng liên hoàn, tối ưu hóa lợi thế bổ trợ lẫn nhau trong các ngành công nghiệp mũi nhọn và nông nghiệp sạch.",
    color: "from-amber-500 to-yellow-600",
    icon: "Network"
  },
  {
    number: 2,
    title: "Kết nối các ngành kinh tế, địa phương và doanh nghiệp",
    subtitle: "Localities & Enterprise Synergy",
    detail: "Khuyến khích hợp tác giữa các tỉnh/thành kết nghĩa, xúc tiến thương mại song phương và tạo thuận lợi tối đa cho doanh nghiệp hai nước mở rộng đầu tư.",
    color: "from-red-500 to-rose-700",
    icon: "Building"
  },
  {
    number: 3,
    title: "Kết nối các chiến lược tăng trưởng xanh, bền vững",
    subtitle: "Green & Sustainable Growth",
    detail: "Đồng hành chuyển đổi năng lượng xanh, kinh tế tuần hoàn, chuyển đổi số và ứng phó biến đổi khí hậu vì sự phát triển bền vững lâu dài.",
    color: "from-emerald-500 to-teal-700",
    icon: "Leaf"
  }
];

export const COOPERATION_PILLARS: CooperationPillar[] = [
  {
    id: "economy",
    category: "Trọng tâm",
    title: "Kinh tế - thương mại",
    icon: "Coins",
    items: [
      "Sớm đưa thương mại hai chiều đạt 25 tỷ USD, theo hướng cân bằng hơn."
    ]
  },
  {
    id: "investment",
    category: "Trọng tâm",
    title: "Triển khai sáng kiến “Ba kết nối”",
    icon: "Building",
    items: [
      "1. Kết nối chuỗi cung ứng.",
      "2. Kết nối các ngành kinh tế, địa phương và doanh nghiệp.",
      "3. Kết nối các chiến lược tăng trưởng xanh, bền vững của hai nước."
    ]
  },
  {
    id: "culture-tourism",
    category: "Gắn kết",
    title: "Văn hóa - Giáo dục - Du lịch",
    icon: "HeartHandshake",
    items: [
      "Mở rộng giảng dạy tiếng Việt, tiếng Thái.",
      "Tăng tần suất các đường bay thẳng.",
      "Phát huy giá trị các công trình cộng đồng như Phố Việt Nam tại tỉnh Udon Thani và các Khu di tích Chủ tịch Hồ Chí Minh tại Thái Lan."
    ]
  },
  {
    id: "regional",
    category: "Chiến lược",
    title: "Hợp tác khu vực",
    icon: "Globe",
    items: [
      "Tiếp tục phối hợp chặt chẽ trong ASEAN và các cơ chế tiểu vùng Mê Công"
    ]
  }
];
