const myQuestions = [
    // {
    //     title: "Câu 1",
    //     question: "Ở phương Tây, dân tộc xuất hiện khi:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Phương thức sản xuất tư bản chủ nghĩa được xác lập thay thế phương thức sản xuất phong kiến.",
    //     b: "Phương thức sản xuất phong kiến được xác lập thay thế phương thức sản xuất chiếm hữu nô lệ.",
    //     c: "Phương thức sản xuất xã chủ nghĩa được xác lập thay thế phương thức sản xuất tư bản chủ nghĩa.",
    //     d: "Phương thức sản xuất hàng hoá được xác lập thay thế phương thức sản xuất tự cung, tự cấp.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 2",
    //     question: "Chế độ dân chủ XHCN ở Việt Nam được xác lập từ thời điểm nào?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Sau Cách mạng tháng Tám năm 1945.",
    //     b: "Sau Cách mạng tháng Tư năm 1975.",
    //     c: "Từ năm 1976, khi đổi tên nước thành Cộng hoà xã hội chủ nghĩa Việt Nam.",
    //     d: "Từ Đại hội VI của Đảng năm 1986.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 3",
    //     question: "Biện pháp nào sau đây là thực hiện chính sách giải quyết việc làm?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Mở rộng các hình tức trợ giúp người nghèo.",
    //     b: "Mở rộng hệ thống trường lớp.",
    //     c: "Bồi dưỡng đội ngũ cán bộ quản lí.",
    //     d: "Nâng cao trình độ người lao động.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 4",
    //     question: "Nước ta quá độ lên chủ nghĩa xã hội theo hình thức nào dưới đây?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Quá độ trực tiếp.",
    //     b: "Quá độ gián tiếp.",
    //     c: "Quá độ nhảy vọt.",
    //     d: "Quá độ vừa gián tiếp vừa có bước nhảy vọt.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 5",
    //     question: "Chủ nghĩa xã hội khoa học trình bày bao nhiêu luận điểm cơ bản?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "3 luận điểm.",
    //     b: "5 luận điểm.",
    //     c: "6 luận điểm.",
    //     d: "4 luận điểm.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 6",
    //     question: "Hội nghị đại biểu các Đảng Cộng sản và công nhân quốc tế họp tại Matxcova (11-1957) đã tổng kết thông qua mấy qui luật chung của công cuộc cải tạo và xây dựng CNXH?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "6 qui luật chung.",
    //     b: "7 qui luật chung.",
    //     c: "8 qui luật chung.",
    //     d: "9 qui luật chung.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 7",
    //     question: "Cơ sở nào là nền tảng để giữ gìn quan hệ hôn nhân gia đình tốt đẹp?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Hạnh phúc.",
    //     b: "Kinh tế.",
    //     c: "Môn đăng, hộ đối.",
    //     d: "Cảm xúc.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 8",
    //     question: "Tiêu dùng hợp lý trong gia đình có nghĩa là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Sử dụng hết các khoản thu nhập trong gia đình cho chi tiêu hàng tháng.",
    //     b: "Sử dụng tối đa các khoản thu nhập của các thành viên để đảm bảo đời sống vật chất và tinh thần của họ.",
    //     c: "Sử dụng hợp lý các khoản thu nhập của các thành viên trong gia đình, đảm bảo đời sống vật chất, tinh thần của họ.",
    //     d: "Sử dụng hiệu quá các khoản thu nhập của các thành viên trong gia đình vào trong việc đầu tư sinh lời.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 9",
    //     question: "Giai cấp công nhân được các nhà kinh điển xác định trên phương diện cơ bản nào?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Kinh tế – xã hội và chính trị – ngoại giao.",
    //     b: "Kinh tế – xã hội và chính trị – xã hội.",
    //     c: "Kinh tế – văn hoá và chính trị – xã hội.",
    //     d: "Kinh tế – ngoại giao và chính trị – quân sự.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 10",
    //     question: "Việt Nam hiện nay có bao nhiêu tộc người sinh sống trên lãnh thổ đất nước?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "54 dân tộc, trong đó có 52 tộc người thiểu số.",
    //     b: "54 dân tộc, trong đó có 53 tộc người thiểu số.",
    //     c: "55 dân tộc, trong đó có 53 tộc người thiểu số.",
    //     d: "55 dân tộc, trong đó có 54 tộc người thiểu số.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 11",
    //     question: "Chọn đáp án đúng nhất. V.I.Lênin phát hiện xu thế khách quan của sự phát triển quan hệ dân tộc:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Các dân tộc tộc người trong một quốc gia đoàn kết lại với nhau chống thế lực thù địch.",
    //     b: "Các dân tộc tộc người trong một quốc gia tự nguyện đoàn kết lại với nhau chống thế lực thù địch.",
    //     c: "Các dân tộc ở nhiều quốc gia thuộc địa khác nhau liên hiệp lại với nhau để xoá bỏ ách đô hộ của phong kiến thực dân.",
    //     d: "Các dân tộc trong từng quốc gia, các dân tộc ở nhiều quốc gia muốn liên hiệp lại với nhau.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 12",
    //     question: "Chức năng văn hoá của gia đình là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Thể hiện trình độ học vấn của các thành viên trong gia đình ấy.",
    //     b: "Thể hiện trình độ văn hoá của các thành viên trong gia đình.",
    //     c: "Giáo hoá, cảm hoá, chỗ dựa tinh thần cho các thành viên trong gia đình.",
    //     d: "Nơi lưu giữ, sáng tạo và thụ hưởng truyền thống văn hoá tốt đẹp của dân tộc, tộc người.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 13",
    //     question: "Chủ nghĩa xã hội khoa học là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Chủ nghĩa Mác – Lênin, luận giải từ các giác độ triết học, kinh tế học chính trị, chính trị xã hội từ sự chuyển biến tất yếu của xã hội loài người.",
    //     b: "Một trong ba bộ phận hợp thành chủ nghĩa Mác – Lênin.",
    //     c: "Những yếu tố từ đó nảy sinh ra chế độ tương lai.",
    //     d: "Chủ nghĩa Mác – Lênin, luận giải từ các giác độ triết học, kinh tế học chính trị, chính trị xã hội từ sự chuyển biến tất yếu của xã hội loài người; một trong ba bộ phận hợp thành chủ nghĩa Mác – Lênin.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 14",
    //     question: "Giai cấp công nhân hiện nay và giai cấp công nhân truyền thống ở thế kỷ XIX:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Hoàn toàn tương đồng về bản chất và hình thức biểu hiện.",
    //     b: "Vừa có điểm tương đồng vừa có điểm khác biệt.",
    //     c: "Hoàn toàn khác biệt về bản chất và hình thức biểu hiện.",
    //     d: "Tương đồng về bản chất, khác biệt về hình thức.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 15",
    //     question: "Nội dung sứ mệnh lịch sử của giai cấp công nhân được thể hiện trong lĩnh vực:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Kinh tế, chính trị, xã hội, văn hoá, tư tưởng.",
    //     b: "Kinh tế, quân sự, chính trị, văn hoá, xã hội.",
    //     c: "Xã hội, quân sự, chính trị, ngoại giao, kinh tế.",
    //     d: "Ngoại giao, chính trị, xã hội, văn hoá, kinh tế.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 16",
    //     question: "Chọn đáp án đúng nhất, giai cấp công nhân chỉ có thể giải phóng mình thông qua việc:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Thực hiện cách mạng bạo lực.",
    //     b: "Thực hiện đấu tranh bạo lực giai cấp.",
    //     c: "Đồng thời giải phóng các giai cấp bị áp bức bóc lột khác, giải phóng xã hội, giải phóng con người.",
    //     d: "Giải phóng giai cấp nông dân, giai cấp vô sản bần cùng thông qua hình thức bạo lực giành chính quyền.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 17",
    //     question: "Nội dung: “Coi trọng giữ vững bản chất giai cấp công nhân và các nguyên tắc sinh hoạt của Đảng” nằm trong Đại hội nào?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Đại hội đại biểu toàn quốc lần thứ XII (2016).",
    //     b: "Đại hội đại biểu toàn quốc lần thứ XI (2011).",
    //     c: "Đại hội đại biểu toàn quốc lần thứ X (2006).",
    //     d: "Đại hội đại biểu toàn quốc lần thứ VIII (1996).",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 18",
    //     question: "CMác  và Ph.Ăngghen cho rằng nguyên nhân thất bại của phong trào đấu tranh của giai cấp công nhân chủ yếu là do:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Không có đường lối cách mạng đúng đắn.",
    //     b: "Giai cấp công nhân đơn độc.",
    //     c: "Không có Đảng Cộng sản lãnh đạo.",
    //     d: "Không đoàn kết quốc tế.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 19",
    //     question: "Nhà nước xuất hiện từ khi:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Con người xuất hiện.",
    //     b: "Xuất hiện chế độ cộng sản nguyên thủy.",
    //     c: "Mâu thuẫn giai cấp không thể điều hòa được.",
    //     d: "Phân hóa lao động.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 20",
    //     question: "Sự ra đời của chủ nghĩa xã hội khoa học dựa vào điều kiện nào?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Điều kiện kinh tế, xã hội, khoa học tự nhiên.",
    //     b: "Điều kiện kinh tế, xã hội, khoa học tự nhiên, tư tưởng lý luận.",
    //     c: "Điều kiện xã hội, khoa học tự nhiên, tư tưởng lý luận.",
    //     d: "Điều kiện kinh tế, xã hội, tư tưởng lý luận.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 21",
    //     question: "Chọn đáp án KHÔNG đúng theo chủ nghĩa Mác – Lênin cơ cấu xã hội – giai cấp, xuất hiện các tầng lớp xã hội mới là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Tầng lớp doanh nhân.",
    //     b: "Tầng lớp tiểu chủ.",
    //     c: "Tầng lớp tri thức mới.",
    //     d: "Tầng lớp những người giàu có và trung lưu.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 22",
    //     question: "Đặc trưng về lĩnh vực kinh tế của chủ nghĩa xã hội là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Nền kinh tế phát triển cao, công nghiệp hoá, hiện đại hoá nhanh chóng.",
    //     b: "Đẩy mạnh công nghiệp hoá, hiện đại hoá đất nước, thúc đẩy nhanh chóng chế độ sở hữu công cộng về tư liệu sản xuất chủ yếu.",
    //     c: "Nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu.",
    //     d: "Nền kinh tế phát triển cao dựa trên sự phát triển của khoa học công nghệ hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 23",
    //     question: "Gia đình Việt Nam hiện nay có thể được gọi là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Gia đình quá độ từ xã hội nông nghiệp cổ truyền sang xã hội công nghiệp hiện đại.",
    //     b: "Gia đình hiện đại hoá với lối sống mới, nếp sống mới.",
    //     c: "Gia đình văn hoá với các giá trị truyền thống của dân tộc được bảo tồn và truyền lưu.",
    //     d: "Gia đình mang văn hoá đặc tính của Phương Đông.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 24",
    //     question: "Một trong những phương án để nâng cao chất lượng dân số ở nước ta là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Nâng cao hiểu biết của người dân về sức khỏe sinh sản.",
    //     b: "Nâng cao đời sống của nhân dân.",
    //     c: "Nâng cao vai trò của gia đình.",
    //     d: "Nâng cao hiểu quả của công tác dân số.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 25",
    //     question: "Chủ nghĩa xã hội khoa học ra đời khi nào?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Đầu Thế kỉ XIX.",
    //     b: "Những năm 40 của Thế kỉ XIX.",
    //     c: "Đầu Thế kỉ XX.",
    //     d: "Những năm 40 của Thế kỉ XX.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 26",
    //     question: "V.I.Lênin phát hiện xu thế khách quan của sự phát triển quan hệ dân tộc:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Dân tộc thiểu số lấy dân tộc đa số làm chuẩn.",
    //     b: "Dân tộc thiểu số có xu hướng tách ra thành dân tộc độc lập.",
    //     c: "Cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập.",
    //     d: "Dân tộc thiểu số đoàn kết lại với nhau hình thành cộng đồng dân tộc độc lập.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 27",
    //     question: "Tiền đề để cải tạo toàn diện, sâu sắc và triệt để xã hội cũ và xây dựng thành công xã hội mới là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Giai cấp công nhân giành được quyền bình đẳng với các giai cấp khác trong xã hội.",
    //     b: "Giai cấp công nhân giành lấy quyền lực thống trị xã hội.",
    //     c: "Giai cấp nông dân, người lao động giành lấy quyền lực xã hội.",
    //     d: "Giai cấp công nhân đánh bại được giai cấp tư bản giành lấy quyền lực xã hội.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 28",
    //     question: "Những chính sách dân tộc của Đảng, Nhà nước Việt Nam hiện nay chú trọng:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Tính cách mạng và tiến bộ, đồng thời còn mang tính nhân văn sâu sắc.",
    //     b: "Tính tiên tiến, đậm đà bản sắc văn hoá dân tộc.",
    //     c: "Tính khoa học, cách mạng và tính toàn diện sâu sắc.",
    //     d: "Tính tiến bộ và công bằng xã hội.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 29",
    //     question: "Chọn đáp án KHÔNG đúng. Để tiếp tục xây dựng và hoàn thiện Nhà nước pháp quyền XHCN cần:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Cải cách thể chế và phương thức hoạt động của Nhà nước.",
    //     b: "Xây dựng Nhà nước pháp quyền XHCN dưới sự lãnh đạo của nhân dân.",
    //     c: "Xây dựng đội ngũ cán bộ, công chức trong sạch, có năng lực.",
    //     d: "Đấu tranh phòng chống tham nhũng, lãng phí, thực hành tiết kiệm.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 30",
    //     question: "Trong Đại hội XI của Đảng nêu: “Đoàn kết dân tộc có vị trí […] quan trọng trong sự nghiệp cách mạng của nước ta”. Chọn đáp án đúng điền vào chỗ trống.",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Đặc biệt.",
    //     b: "Sách lược.",
    //     c: "Vô cùng.",
    //     d: "Chiến lược.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 31",
    //     question: "C.Mác và Ph.Ăngghen đã sử dụng thuật ngữ nào sau đây để chỉ về giai cấp công nhân? Chọn đáp án KHÔNG đúng.",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Giai cấp vô sản.",
    //     b: "Giai cấp vô sản hiện đại.",
    //     c: "Giai cấp công nhân đại công nghiệp.",
    //     d: "Tầng lớp công nhân.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 32",
    //     question: "Nội dung nào là một trong những mục tiêu của chính sách dân số nước ta?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Tuyên truyền, giáo dục biện pháp kế hoạch hóa gia đình.",
    //     b: "Tổ chức tốt bộ máy làm công tác dân số.",
    //     c: "Nâng cao chất lượng dân số.",
    //     d: "Phát triển nguồn nhân lực.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 33",
    //     question: "Trong tác phẩm “Tuyên ngôn Đảng Cộng sản”, sự khác biệt về chất giữa hình thái KTXH cộng sản chủ nghĩa với các hình thái KTXH ra đời trước là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Kinh tế có nền tảng khoa học, kỹ thuật phát triển cao, năng suất lao động cao, nhận thức chính trị xã hội của người dân cao.",
    //     b: "Con người làm chủ tồn tại xã hội của chính mình, thì do đó làm chủ tự nhiên, làm chủ cả bản thân mình trở thành người tự do.",
    //     c: "Con người làm chủ tư liệu sản xuất, chinh phục tự nhiên, chinh phục vũ trụ, chinh phục bản thân mình để trở thành người tự do.",
    //     d: "Quan hệ sản xuất phát triển, con người làm chủ tư liệu sản xuất, chinh phục tự nhiên, chinh phục vũ trụ, chinh phục bản thân mình để trở thành người tự do.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 34",
    //     question: "Trên phương diện chế độ chính trị, xã hội thì dân chủ là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Một hình thức hay hình thái nhà nước.",
    //     b: "Một nguyên tắc quản lý xã hội.",
    //     c: "Quyền lực thuộc về nhân dân.",
    //     d: "Một phạm trù vĩnh viễn.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 35",
    //     question: "Đặc trưng, phương hướng, nhiệm vụ xây dựng CNXH ở Việt Nam hiện nay trong Đại hội XI, XII của Đảng, gồm có:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "5 đặc trưng, 5 phương hướng, 7 nhiệm vụ.",
    //     b: "6 đặc trưng, 6 phương hướng, 8 nhiệm vụ.",
    //     c: "7 đặc trưng, 7 phương hướng, 10 nhiệm vụ.",
    //     d: "8 đặc trưng, 8 phương hướng, 12 nhiệm vụ.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 36",
    //     question: "Theo quan điểm của chủ nghĩa Mác – Lênin, dân tộc được hiểu là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Quốc gia dân tộc, tộc người.",
    //     b: "Cộng đồng người bao gồm nhiều tộc người.",
    //     c: "Cộng đồng người có chung lãnh thổ.",
    //     d: "Nhiều tộc người sinh sống trên một lãnh thổ.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 37",
    //     question: "Chọn đáp án đúng nhất. Gia đình có ảnh hưởng rất lớn đối với:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Mối quan hệ giữa các thành viên trong xã hội.",
    //     b: "Sự hình thành và phát triển nhân cách của từng người.",
    //     c: "Mối quan hệ giữa các thành viên trong gia đình.",
    //     d: "Sự tồn tại, vận động và phát triển của xã hội.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 38",
    //     question: "Theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học, đặc trưng thể hiện thuộc tính bản chất của chủ nghĩa xã hội là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Xã hội do giai cấp công nhân làm chủ.",
    //     b: "Xã hội do giai cấp vô sản làm chủ.",
    //     c: "Xã hội do lao động xã hội làm chủ.",
    //     d: "Xã hội do nhân dân lao động làm chủ.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 39",
    //     question: "Theo V.I.Lênin nội dung cơ bản nhất khi bước vào thời kỳ quá độ lên CNXH là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Chính trị đã chuyển trọng tâm sang kinh tế.",
    //     b: "Kinh tế đã chuyển trọng tâm sang chính trị.",
    //     c: "Chính trị đã chuyển trọng tâm sang chính trị trong lĩnh vực dân chủ.",
    //     d: "Chính trị đã chuyển trọng tâm sang chính trị trong lĩnh vực kinh tế.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 40",
    //     question: "Ở phương Đông, dân tộc được hình thành trên cơ sở:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Một cộng đồng kinh tế phát triển tới một mức độ nhất định.",
    //     b: "Một nền văn hoá, một tâm lý dân tộc đã phát triển tương đối chín muồi.",
    //     c: "Một cộng đồng văn minh đã phát triển tương đối cao.",
    //     d: "Một cộng đồng các bộ tộc liên kết lại với nhau.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 41",
    //     question: "V.I.Lênin khẳng định liên minh công, nông là vấn đề mang tính […] để đảm bảo cho thắng lợi cho cách mạng tháng Mười Nga năm 1917. Chọn đáp án đúng nhất điền vào chỗ trống.",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Sống còn.",
    //     b: "Khách quan.",
    //     c: "Cần thiết.",
    //     d: "Nguyên tắc.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 42",
    //     question: "Chọn đáp án đúng nhất, giai cấp công nhân và nhân dân lao động sử dụng nhà nước của mình, do mình làm chủ như một công cụ có hiệu lực để:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Đập tan nhà nước tư bản, xây dựng nhà nước XHCN.",
    //     b: "Thực thi quyền bình đẳng XHCN.",
    //     c: "Xây dựng xã hội hoàn toàn mới, thực thi quyền dân chủ XHCN.",
    //     d: "Cải tạo xã hội cũ và tổ chức xây dựng xã hội mới, theo lý tưởng và mục tiêu của CNXH.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 43",
    //     question: "Sự kiện nào đánh dấu chủ nghĩa xã hội khoa học từ lý luận thành thực tiễn?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Nhà nước Xô viết, năm 1917.",
    //     b: "Cách mạng Tháng 10 Nga, năm 1917.",
    //     c: "Cách mạng vô sản Pháp.",
    //     d: "Nhà nước Công xã Pari.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 44",
    //     question: "Quy luật đấu tranh giai cấp mang tính phổ biến cho sự phát triển của các xã hội có giai cấp là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Giai cấp nào muốn bảo vệ lợi ích cho giai cấp mình thì phải đứng lên thực hiện cuộc đấu tranh cách mạng để tự giải phóng chính mình.",
    //     b: "Giai cấp nào muốn bảo vệ lợi ích cho giai cấp mình thì phải tổ chức một cuộc đấu tranh để tự giải phóng chính mình.",
    //     c: "Mỗi giai cấp đứng ở vị trí trung tâm đều phải tìm cách liên minh với các giai cấp, tầng lớp xã hội khác có lợi ích phù hợp với mình.",
    //     d: "Mỗi giai cấp muốn đạt được quyền lực đều phải tìm cách liên minh với các giai cấp, tầng lớp xã hội khác có lợi ích phù hợp với mình.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 45",
    //     question: "Liên hiệp công nhân các dân tộc phản ánh sự thống nhất giữa:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Công nhân các nước thuộc địa với công nhân các nước chính quốc.",
    //     b: "Giải phóng dân tộc với giải phóng giai cấp.",
    //     c: "Vấn đề dân tộc thuộc địa với vấn đề vô sản chính quốc.",
    //     d: "Vấn đề dân tộc với vấn đề giai cấp.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 46",
    //     question: "Tính dân tộc của Nhà nước ta được thể hiện như thế nào dưới đây?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Nhà nước ta là Nhà nước của các dân tộc.",
    //     b: "Mỗi dân tộc có bản sắc riêng của mình.",
    //     c: "Nhà nước chăm lo lợi ích mọi mặt cho các dân tộc ở Việt Nam.",
    //     d: "Dân tộc nào cũng có chữ viết riêng.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 47",
    //     question: "Cơ cấu kinh tế trong thời kì quá độ lên CNXH vận động theo:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Cơ chế kế hoạch hoá, tập trung.",
    //     b: "Cơ chế thị trường, có sự can thiệp của nhà nước trong khủng hoảng kinh tế.",
    //     c: "Cơ chế thị trường, có sự quản lý của Nhà nước pháp quyền XHCN.",
    //     d: "Cơ chế thị trường tự do cạnh canh với vai trò bàn tay vô hình của nhà nước.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 48",
    //     question: "Con đẻ của nền đại công nghiệp tư bản chủ nghĩa là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Giai cấp công nhân.",
    //     b: "Giai cấp vô sản.",
    //     c: "Giai cấp vô sản hiện đại.",
    //     d: "Giai cấp vô sản bần cùng.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 49",
    //     question: "“Các dân tộc hoàn toàn bình đẳng, các dân tộc được quyền tự quyết, liên hiệp công nhân tất cả các dân tộc lại”. Phát biểu này nằm trong tác phẩm nào?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin.",
    //     b: "Cương lĩnh về các vấn đề dân tộc và vấn đề thuộc địa.",
    //     c: "Tuyên ngôn nhân quyền và dân quyền.",
    //     d: "Tuyên ngôn độc lập.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 50",
    //     question: "Các nhà tư tưởng Hy Lạp cổ đại đã dùng cụm từ nào sau đây để nói đến dân chủ?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "democracy.",
    //     b: "demokratos.",
    //     c: "democracia.",
    //     d: "démocratie.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 51",
    //     question: "Chức năng cơ bản của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Trấn áp các lực lượng phá hoại.",
    //     b: "Tổ chức và xây dựng.",
    //     c: "Giữ gìn chế độ xã hội.",
    //     d: "Giữ gìn trật tự xã hội, bảo vệ Tổ quốc.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 52",
    //     question: "Những chính sách dân tộc của Đảng, Nhà nước Việt Nam hiện nay không cho phép:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Xây dựng tư tưởng văn hoá riêng biệt giữa các dân tộc anh em.",
    //     b: "Xuất hiện tư tưởng kì thị, chia rẽ dân tộc.",
    //     c: "Gây chia rẽ, mất đoàn kết trong nội bộ Đảng.",
    //     d: "Tiếp thu, giao lưu văn hoá với các dân tộc ở các quốc gia khác.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 53",
    //     question: "Chọn đáp án đúng nhất theo chủ nghĩa Mác – Lênin chỉ ra điều kiện chủ quan để giai cấp công nhân hoàn thành sứ mệnh lịch sử của mình. Đó là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Sự phát triển của bản thân giai cấp công nhân cả về số lượng và chất lượng.",
    //     b: "Sự xuất hiện của chính đảng vô sản kiểu mới của giai cấp công nhân.",
    //     c: "Sự liên minh giữa giai cấp công nhân với giai cấp nông dân và các tầng lớp lao động khác.",
    //     d: "Sự liên minh giữa Công – Nông – Các tầng lớp lao động khác do giai cấp công nhân lãnh đạo với sự phát triển về số lượng, chất lượng và thông qua đội tiên phong là Đảng Cộng sản.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 54",
    //     question: "Chọn đáp án KHÔNG đúng. Trong giai đoạn đầu thời kỳ quá độ, cơ cấu xã hội – giai cấp ở Việt Nam có điểm nổi bật:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Sự biến đổi cơ cấu vừa đảm bảo tính phổ biến, vừa mang tính đặc thù của xã hội Việt Nam.",
    //     b: "Trong sự biến đổi của cơ cấu, vị trí của các giai cấp, tầng lớp xã hội ngày càng được khẳng định.",
    //     c: "Sự biến đổi cơ cấu phụ thuộc vào qui luật biến đổi cơ cấu xã hội – giai cấp trên thế giới.",
    //     d: "Trong sự biến đổi của cơ cấu, vai trò của các giai cấp, tầng lớp xã hội ngày càng được khẳng định.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 55",
    //     question: "Quyền tự quyết dân tộc:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Các dân tộc tự quyết định lấy vận mệnh và quyền tự lựa chọn chế độ chính trị.",
    //     b: "Các dân tộc thộc địa tự quyết định lấy vận mệnh và quyền tự lựa chọn chế độ chính trị.",
    //     c: "Các dân tộc có quyền tự lựa chọn chế độ chính trị và con đường phát triển cho dân tộc mình.",
    //     d: "Quyền tách ra thành lập một quốc gia dân tộc độc lập và quyền tự nguyện liên hiệp với dân tộc khác.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 56",
    //     question: "“Thời đoạn Xtalin” trực tiếp vận dụng và phát triển chủ nghĩa xã hội khoa học là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Từ năm 1917 đến 1920.",
    //     b: "Từ năm 1920 đến 1924.",
    //     c: "Từ năm 1945 đến 1953.",
    //     d: "Từ năm 1924 đến 1953.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 57",
    //     question: "Đặc điểm nổi bật và bao trùm của thời quá độ lên chủ nghĩa xã hội ở nước ta là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Xã hội dân giàu, nước mạnh, dân chủ, văn minh.",
    //     b: "Sự tồn tại đan xen và đáu tranh lẫn nhau giữa những yếu tố của xã hội mới và những tàn dư của xã hội cũ.",
    //     c: "Các dân tộc trong nước bình đẳng, đoàn kết.",
    //     d: "Nền kinh tế phát triển với trình độ cao.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 58",
    //     question: "Chọn đáp án đúng nhất. Mối quan hệ giữa dân chủ XHCN với nhà nước XHCN là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Dân chủ XHCN là mục đích cho việc xây dựng và hoạt động của nhà nước XHCN.",
    //     b: "Dân chủ XHCN là động lực cho việc xây dựng và hoạt động của nhà nước XHCN.",
    //     c: "Dân chủ XHCN là cơ sở, nền tảng cho việc xây dựng và hoạt động của nhà nước XHCN.",
    //     d: "Nhà nước XHCN là cơ quan ban hành cơ chế xây dựng dân chủ XHCN.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 59",
    //     question: "Nội dung nào là đặc trưng cơ bản về chính trị của chủ nghĩa xã hội ở nước ta?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Là một xã hôi dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
    //     b: "Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.",
    //     c: "Con người được giải phóng khỏi áp bức, bất công.",
    //     d: "Do dân lao động làm chủ.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 60",
    //     question: "Thực tiễn nào đánh dấu nền dân chủ XHCN chính thức được xác lập?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Công nghiệp hơi nước ở Anh năm 1791.",
    //     b: "Đấu tranh giai cấp ở Pháp và Công xã Pari năm 1871.",
    //     c: "Cách mạng Tháng 10/1917 ở Nga.",
    //     d: "Đấu tranh giành chính quyền ở Mỹ năm 1776.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 61",
    //     question: "Khẳng định nào sau đây không đúng về nội dung của dân chủ trong lĩnh vực chính trị?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Công dân có quyền bầu cử, ứng cử vào các cơ quan quyền lực nhà nước.",
    //     b: "Công dân có quyền tham gia quản lí nhà nước và xã hội.",
    //     c: "Công dân có quyền quyết định mọi vấn đề chung của Nhà nước.",
    //     d: "Công dân có quyền biểu quyết khi Nhà nước tổ chức trưng cầu ý dân.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 62",
    //     question: "Chọn phương án đúng nhất theo Mác và Ăngghen đặc điểm nổi bật của giai cấp công nhân (giai cấp vô sản) là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Giai cấp bị áp bức bóc lột nặng nề.",
    //     b: "Giai cấp lao động bằng phương thức công nghiệp với đặc trưng công cụ lao động là máy móc.",
    //     c: "Giai cấp có phương thức sản xuất hiện đại.",
    //     d: "Giai cấp có lý luận, lập trường vô sản.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 63",
    //     question: "Để giải quyết mối quan hệ dân tộc và tôn giáo ở Việt Nam hiện nay cần quán triệt mấy quan điểm?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Hai quan điểm chính.",
    //     b: "Ba quan điểm chính.",
    //     c: "Hai quan điểm chính và một quan điểm phụ.",
    //     d: "Ba quan điểm chính và một quan điểm phụ.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 64",
    //     question: "Quyền nào của công dân thể hiện dân chủ trong lĩnh vực xã hội?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Quyền được hưởng bảo hiểm xã hội.",
    //     b: "Quyền được thông tin.",
    //     c: "Quyền tham gia quản lí nhà nước.",
    //     d: "Quyền khiếu nại.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 65",
    //     question: "Mục tiêu tổng quát của cách mạng Việt Nam trong Đại hội Đảng lần thứ XII:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Dân giàu, nước mạnh, xã hội công bằng, văn minh.",
    //     b: "Dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh.",
    //     c: "Dân chủ, dân giàu, nước mạnh, xã hội công bằng, văn minh.",
    //     d: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 66",
    //     question: "Dân tộc theo thuật ngữ tiếng Anh được viết là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "natie.",
    //     b: "nazioaren.",
    //     c: "nation.",
    //     d: "national.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 67",
    //     question: "Khi giải quyết các vấn đề tôn giáo trong thời kỳ quá độ lên CNXH cần đảm bảo mấy nguyên tắc cơ bản?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Ba nguyên tắc.",
    //     b: "Bốn nguyên tắc.",
    //     c: "Năm nguyên tắc.",
    //     d: "Sáu nguyên tắc.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 68",
    //     question: "Quá độ lên CNXH bỏ qua chế độ TBCN ở Việt Nam là tạo ra sự biến đổi về […] của xã hội trên tất cả các lĩnh vực. Chọn đáp án đúng nhất điền vào chổ trống.",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Lượng.",
    //     b: "Đời sống.",
    //     c: "Chất.",
    //     d: "Tinh thần.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 69",
    //     question: "Giai cấp công nhân trong quan hệ sản xuất TBCN, có:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Tư liệu sản xuất trong tay, làm chủ sức lao động của mình.",
    //     b: "Công cụ lao động trong tay, làm chủ sức lao động của mình.",
    //     c: "Không sở hữu tư liệu sản xuất, phải bán sức lao động cho nhà tư bản.",
    //     d: "Máy móc, học thuyết Mác – Lênin.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 70",
    //     question: "Chủ nghĩa Mác – Lênin nhấn mạnh: chừng nào con người và xã hội loài người còn tồn tại, văn minh nhân loại chưa bị diệt vong thì chừng đó dân chủ vẫn còn tồn tại với tư cách là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Một giá trị văn minh trường tồn.",
    //     b: "Một giá trị văn hoá chung.",
    //     c: "Một giá trị nhân loại chung.",
    //     d: "Một giá trị nhân loại trường tồn.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 71",
    //     question: "V.I.Lênin chủ trương mở rộng khối liên minh công, nông với các tầng lớp trong xã hội trong bước đầu thời kỳ quá độ lên CNXH là một hình thức:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Liên minh đặc biệt.",
    //     b: "Liên minh cá biệt.",
    //     c: "Liên minh tất yếu khách quan.",
    //     d: "Liên minh tất yếu chủ quan.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 72",
    //     question: "Dưới góc độ chính trị – xã hội, Chủ nghĩa xã hội khoa học tập trung nghiên cứu cơ cấu xã hội nào?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Cơ cấu xã hội – giai cấp.",
    //     b: "Cơ cấu xã hội – dân cư.",
    //     c: "Cơ cấu xã hội – dân tộc.",
    //     d: "Cơ cấu xã hội – tôn giáo.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 73",
    //     question: "Tính tất yếu thay thế hình thái kinh tế – xã hội từ tư bản sang cộng sản chủ nghĩa xuất phát từ tiền đề quan trọng nhất là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Sự phát triển của quan hệ sản xuất từ quan hệ sản xuất tư bản chủ nghĩa sang quan hệ sản xuất cộng sản chủ nghĩa.",
    //     b: "Sự phát triển của kiến trúc thượng tầng từ kiến trúc thượng tầng tư bản chủ nghĩa sang kiến trúc thượng tầng cộng sản chủ nghĩa.",
    //     c: "Sự phát triển của quan hệ sản xuất cộng sản chủ nghĩa phù hợp với sự phát triển của lực lượng sản xuất cộng sản chủ nghĩa.",
    //     d: "Sự phát triển của lực lượng sản xuất và sự trưởng thành của giai cấp công nhân.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 74",
    //     question: "Giai đoạn đầu của hình thái kinh tế – xã hội cộng sản chủ nghĩa là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Chủ nghĩa xã hội.",
    //     b: "Chủ nghĩa tư bản.",
    //     c: "Quá độ chủ nghĩa tư bản lên chủ nghĩa xã hội.",
    //     d: "Thời kì quá độ.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 75",
    //     question: "Hồ Chí Minh khẳng định: “Nếu không giải phóng phụ nữ là xây dựng chủ nghĩa xã hội […]”. Chọn đáp án đúng điền vào chỗ trống.",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Công bằng.",
    //     b: "Văn minh.",
    //     c: "Một nữa.",
    //     d: "Không công bằng.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 76",
    //     question: "Chọn cụm từ đúng vào chỗ trống: “Chỉ có…là giai cấp duy nhất không có lợi ích riêng với nghĩa là tư hữu”.",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Giai cấp tư sản.",
    //     b: "Giai cấp công nhân.",
    //     c: "Giai cấp nông dân.",
    //     d: "Giai cấp vô sản.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 77",
    //     question: "Theo quan điểm của chủ nghĩa Mác – Lênin, nguyên nhân nào quyết định sự biến đổi của cộng đồng dân tộc?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Sự biến đổi của các hình thức sở hữu.",
    //     b: "Sự biến đổi của các hình thức nhà nước.",
    //     c: "Sự biến đổi của lực lượng sản xuất.",
    //     d: "Sự biến đổi của phương thức sản xuất.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 78",
    //     question: "Giải quyết việc làm cho người lao động hiện nay ở nước ta nhằm:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Phát huy được tiền năng lao động.",
    //     b: "Sử dụng có hiệu quả nguồn lao động chất lượng cao.",
    //     c: "Nâng cao năng lực cạnh tranh của nền kinh tế.",
    //     d: "Huy động được nguồn vốn trong nhân dân.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 79",
    //     question: "Nhà nước thể hiện ý chí, lợi ích và nguyện vọng của nhân dân là nói đến đặc điểm nào dưới đây?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Tính xã hội.",
    //     b: "Tính nhân dân.",
    //     c: "Tính giai cấp.",
    //     d: "Tính quần chúng.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 80",
    //     question: "Nhà nước pháp quyền XHCN được xây dựng ở Việt Nam hiện nay gồm mấy đặc điểm cơ bản?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Sáu đặc điểm cơ bản.",
    //     b: "Năm đặc điểm cơ bản.",
    //     c: "Bảy đặc điểm cơ bản.",
    //     d: "Tám đặc điểm cơ bản.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là bs"
    //     },
    // {
    //     title: "Câu 81",
    //     question: "“Hôn nhân tự nguyện là đảm bảo cho nam nữ có quyền tự do trong kết hôn, không chấp nhận sự áp đặt của cha mẹ”. Hiểu câu nói này như thế nào?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Cha mẹ không áp đặt hôn nhân mà chỉ quan tâm, hướng dẫn con cái có nhận thức đúng, có trách nhiệm trong việc kết hôn.",
    //     b: "Cha mẹ không nên chỉ định đối tượng kết hôn cho con cái, mà chỉ mang tính chất giới thiệu những đối tượng nên kết hôn.",
    //     c: "Cha mẹ hoàn toàn không có quyền can thiệp vào cuộc sống hôn nhân của con cái.",
    //     d: "Cha mẹ chỉ nên đứng phía sau hỗ trợ, giúp đỡ nuôi dạy con cháu.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 82",
    //     question: "Hiện nay ở Việt Nam, đội ngũ thanh niên được Đảng xác định là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Giường cột của nước nhà, chủ nhân tương lai của đất nước.",
    //     b: "Mùa xuân của đất nước, chủ nhân tương lai của đất nước.",
    //     c: "Rường cột của nước nhà, chủ nhân tương lai của đất nước.",
    //     d: "Tuổi trẻ tương lai của đất nước.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 83",
    //     question: "Để thực hiện sứ mệnh lịch sử của giai cấp công nhân Việt Nam trong bối cảnh hiện nay phải đặc biệt coi trọng vấn đề nào?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Xây dựng, phát triển giai cấp công nhân lớn mạnh, hiện đại.",
    //     b: "Xây dựng, phát triển giai cấp công nhân lớn mạnh về số lượng và chất lượng.",
    //     c: "Bồi dưỡng tri thức, nắm vững khoa học – công nghệ của cách mạng công nghiệp lần thứ 4.",
    //     d: "Công tác xây dựng, chỉnh đốn Đảng, làm cho Đảng trong sạch, vững mạnh.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 84",
    //     question: "Nhiệm vụ vô cùng quan trọng của chủ nghĩa xã hội khoa học là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Chống CNTB, bảo vệ CNXH.",
    //     b: "Phê phán đấu tranh bác bỏ tư tưởng chống cộng, chống CNXH, bảo vệ thành quả cách mạng XHCN.",
    //     c: "Phê phán, bác bỏ tư tưởng chống chủ nghĩa đế quốc, bảo vệ thành quả cách mạng tư sản.",
    //     d: "Chống CNTB, chống chế độ Phong kiến, bảo vệ thành quả cách mạng XHCN.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 85",
    //     question: "Cơ sở kinh tế – xã hội để xây dựng gia đình trong thời kỳ quá độ lên CNXH là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Sự phát triển của cơ sở hạ tầng và kiến trúc thượng tầng phù hợp.",
    //     b: "Sự phát triển của lực lượng sản xuất và quan hệ sản xuất mới, XHCN.",
    //     c: "Sự phát triển của nền kinh tế khiến cho thu nhập lao động gia tăng.",
    //     d: "Sự phát triển của các cuộc cách mạng về khoa học công nghệ làm biến đổi phương thức sản xuất.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 86",
    //     question: "Theo C.Mác và Ph.Ăngghen, hình thái kinh tế – xã hội cộng sản chủ nghĩa phát triển:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Bỏ qua giai đoạn phong kiến tiến thẳng lên chủ nghĩa tư bản.",
    //     b: "Bỏ qua giai đoạn phát triển tư bản tiến thẳng lên chủ nghĩa xã hội.",
    //     c: "Từ thấp đến cao qua 2 giai đoạn, giai đoạn thấp và giai đoạn cao – giai đoạn cộng sản chủ nghĩa.",
    //     d: "Qua 2 giai đoạn, giai đoạn quá độ lên chủ nghĩa xã hội, giai đoạn chủ nghĩa cộng sản.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 87",
    //     question: "Nhà nước nào mà Lênin gọi là “nửa nhà nước”?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Nhà nước chủ nô.",
    //     b: "Nhà nước tư sản.",
    //     c: "Nhà nước XHCN.",
    //     d: "Nhà nước phong kiến.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 88",
    //     question: "Chọn đáp án đúng nhất. Theo Ph.Ăngghen, hôn nhân tiến bộ còn là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Quyền bình đẳng giữa nam và nữ trong hôn nhân.",
    //     b: "Bao hàm cả quyền tự do ly hôn khi tình yêu không còn nữa.",
    //     c: "Quyền bình đẳng về kinh tế giữa các thành viên trong gia đình.",
    //     d: "Quyền bình đẳng trong nuôi dạy con cái trong gia đình.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 89",
    //     question: "Đội ngũ trí thức có vai trò như thế nào trong tiến trình đẩy mạnh công nghiệp hoá, hiện đại hoá và hội nhập quốc tế của Việt Nam hiện nay?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Đặc biệt quan trọng.",
    //     b: "Rất đặc biệt.",
    //     c: "Quan trọng.",
    //     d: "Quyết định.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 90",
    //     question: "Quan điểm “Đảng phải quán triệt tư tưởng lấy dân làm gốc, xây dựng và phát huy quyền làm chủ của nhân dân lao động” được nêu ra trong văn kiện Đại hội Đảng lần thứ mấy?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Đại hội Đảng toàn quốc lần thứ V.",
    //     b: "Đại hội Đảng toàn quốc lần thứ VI.",
    //     c: "Đại hội Đảng toàn quốc lần thứ VII.",
    //     d: "Đại hội Đảng toàn quốc lần thứ IX.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 91",
    //     question: "Chọn đáp án KHÔNG đúng. Vị trí của gia đình trong xã hội:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Gia đình là tế bào của xã hội.",
    //     b: "Gia đình là tổ ấm, mang lại giá trị hạnh phúc, sự hài hoà trong đời sống cá nhân của mỗi thành viên.",
    //     c: "Gia đình là viên gạch đầu tiên xây dựng ngôi nhà xã hội.",
    //     d: "Gia đình là cầu nối giữa cá nhân với xã hội.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 92",
    //     question: "Theo V.I.Lênin, mục đích cao nhất, cuối cùng của những cải tạo xã hội chủ nghĩa là thực hiện theo nguyên tắc nào?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Làm theo năng lực, hưởng theo lao động.",
    //     b: "Làm theo lao động, hưởng theo năng lực.",
    //     c: "Làm theo năng lực, hưởng theo nhu cầu.",
    //     d: "Làm bao nhiêu, hưởng bấy nhiêu.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 93",
    //     question: "Điều kiện ra đời của chủ nghĩa xã hội theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Sự phát triển của lực lượng sản xuất, sự trưởng thành của giai cấp công nhân và cách mạng vô sản dưới sự lãnh đạo của giai cấp công nhân – Đảng Cộng sản.",
    //     b: "Sự phát triển của quan hệ sản xuất, sự trưởng thành của giai cấp công nhân và cách mạng vô sản dưới sự lãnh đạo của giai cấp công nhân – Đảng Cộng sản.",
    //     c: "Sự phát triển của lực lượng sản xuất, sự trưởng thành của giai cấp công nhân và cách mạng tư sản dưới sự lãnh đạo của giai cấp tư sản.",
    //     d: "Sự phát triển của lực lượng sản xuất trong lòng xã hội tư bản và sự trưởng thành thực sự của giai cấp công nhân.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 94",
    //     question: "Mục tiêu cách mạng mà Đảng và nhân dân ta đang ra sức phấn đầu xây dựng là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Chủ nghĩa quốc tế.",
    //     b: "Chủ nghĩa xã hội.",
    //     c: "Chủ nghĩa tư bản.",
    //     d: "Chủ nghĩa vô sản.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 95",
    //     question: "Luận điểm nào sau đây không thuộc chủ nghĩa xã hội khoa học:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Logic phát triển tất yếu của xã hội là sự sụp đổ của của CNTB và sự thắng lợi của CNXH.",
    //     b: "Tính tất yếu của xã hội loài người là phải trải qua giai đoạn CNTB đi lên CNCS.",
    //     c: "Giai cấp công nhân là đội tiên phong xây dựng CNXH, có sứ mệnh thủ tiêu CNTB.",
    //     d: "Người cộng sản trên thế giới đoàn kết lại, liên minh lực lượng dân chủ đánh đổ chế độ phong kiến và TBCN. Tiến hành cuộc cách mạng không ngừng, có chiến lược, sách lược khôn khéo và kiên quyết.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 96",
    //     question: "Chọn đáp án đúng. Trong xã hội Việt Nam hiện nay, sự biến đổi chức năng giáo dục:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Giáo dục gia đình là cơ sở của giáo dục xã hội.",
    //     b: "Giáo dục gia đình gắn bó mật thiết với giáo dục xã hội.",
    //     c: "Giáo dục xã hội bao trùm lên giáo dục gia đình.",
    //     d: "Giáo dục xã hội song song với giáo dục gia đình.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 97",
    //     question: "Trong chức năng giáo dục con người cần coi trọng:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Giáo dục của gia đình phải gắn liền với giáo dục của xã hội.",
    //     b: "Giáo dục của gia đình hơn giáo dục của xã hội.",
    //     c: "Giáo dục của xã hội hơn giáo dục của gia đình.",
    //     d: "Giáo dục xã hội, nhà trường phải đáp ứng yêu cầu lao động của xã hội.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 98",
    //     question: "Chọn đáp án đúng nhất. Đặc điểm dân tộc Việt Nam hiện nay:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Có sự chênh lệch về số dân giữa các tộc người.",
    //     b: "Dân tộc kinh được coi là tộc người chính.",
    //     c: "Các dân tộc có nền kinh tế phát triển đều nhau.",
    //     d: "Văn hoá các dân tộc được quy tụ lại với nhau.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 99",
    //     question: "Một trong những nội dung của dân chủ trong lĩnh vực chính trị được thể hiện ở:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Quyền bình đẳng nam nữ.",
    //     b: "Quyền tham gia quản lí nhà nước và xã hội.",
    //     c: "Quyền tự do kinh doanh.",
    //     d: "Quyền tự do lựa chọn nơi ở và làm việc.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 100",
    //     question: "Học thuyết về hình thái kinh tế – xã hội chỉ ra lịch sử loài người trải qua mấy hình thái?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "6 – Cộng sản nguyên thuỷ; Chiếm hữu nô lệ; Phong kiến chủ nghĩa; Chủ nghĩa tư bản; Chủ nghĩa xã hội; Cộng sản chủ nghĩa.",
    //     b: "5 – Cộng sản nguyên thuỷ; Chiếm hữu nô lệ; Phong kiến chủ nghĩa; Chủ nghĩa tư bản; Cộng sản chủ nghĩa.",
    //     c: "5 – Cộng sản nguyên thuỷ; Chiếm hữu nô lệ; Phong kiến chủ nghĩa; Chủ nghĩa tư bản; Xã hội chủ nghĩa.",
    //     d: "5 – Cộng sản nguyên thuỷ; Chiếm hữu nô lệ; Chủ nghĩa tư bản; Thời kỳ quá độ CNXH; Cộng sản chủ nghĩa.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 101",
    //     question: "Cơ sở chính trị – xã hội để xây dựng gia đình trong thời kỳ quá độ lên CNXH là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Thiết lập nhà nước của giai cấp công nhân và nhân dân lao động.",
    //     b: "Thiết lập chính quyền thuộc về các tầng lớp nhân dân lao động.",
    //     c: "Thiết lập các cơ quan hành chính Nhà nước trong sạch, vững mạnh, hoạt động có hiệu quả.",
    //     d: "Xây dựng Đảng trong sạch, vững mạnh, hoạt động có hiệu quả.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 102",
    //     question: "Hiện nay Việt Nam có bao nhiêu tôn giáo được công nhận tư cách pháp nhân?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "11 Tôn giáo.",
    //     b: "12 Tôn giáo.",
    //     c: "13 Tôn giáo.",
    //     d: "14 Tôn giáo.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 103",
    //     question: "Nguyên nhân nào lí giải cho việc nước ta đi lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là hoàn toàn đúng đắn?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Đi lên chủ nghĩa xã hội xóa bỏ áp bức, bóc lột.",
    //     b: "Đi lên chủ nghĩa xã hội la nhu cầu của nhiều nước trên thế giới.",
    //     c: "Tư bản chủ nghĩa là một chế độ còn duy trì tình trạng bóc lột.",
    //     d: "Chủ nghĩa xã hội là chế độ xã hội tốt đẹp và công bằng.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 104",
    //     question: "Chức năng chính trị của gia đình thể hiện:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Nơi tổ chức thực hiện và hưởng lợi từ chính sách, pháp luật của nhà nước và quy chế của làng xã.",
    //     b: "Nơi thể hiện quyền lực chính trị của Nhà nước đối với công dân.",
    //     c: "Nơi thể hiện quyền lực chính trị của công dân đối với Nhà nước.",
    //     d: "Nơi thể hiện trách nhiệm và nghĩa vụ của công dân đối với xây dựng hệ thống chính trị xã hội.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 105",
    //     question: "Theo quan điểm của chủ nghĩa Mác – Lênin, từ CNTB lên CNXH tất yểu phải trải qua thời kỳ nào?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Quá độ chính trị.",
    //     b: "Quá độ kinh tế.",
    //     c: "Quá độ tích luỹ tư bản.",
    //     d: "Quá độ.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 106",
    //     question: "Theo quan điểm của chủ nghĩa Mác – Lênin, dân tộc là quá trình phát triển lâu dài của xã hội loài người, trải qua các hình thức cộng đồng từ thấp đến cao:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Bộ lạc, bộ tộc, thị tộc, dân tộc.",
    //     b: "Bộ tộc, thị tộc, bộ lạc, dân tộc.",
    //     c: "Thị tộc, bộ lạc, bộ tộc, dân tộc.",
    //     d: "Thị tộc, công xã, bộ lạc, dân tộc.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 107",
    //     question: "Quan hệ hôn nhân, gia đình là vấn đề của:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Riêng tư của mỗi gia đình.",
    //     b: "Riêng tư của mỗi cá nhân.",
    //     c: "Nhà nước quản lý.",
    //     d: "Quan hệ xã hội.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 108",
    //     question: "Khi các nguyên tắc của nền dân chủ XHCN bị vi phạm, thì việc xây dựng nhà nước XHCN có:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Quyền lực không thuộc về nhân dân.",
    //     b: "Quyền lực nhân dân biến thành quyền lực thuộc về giai cấp tư sản, phục vụ lợi ích của giai cấp tư sản.",
    //     c: "Quyền lực nhân dân biến thành quyền lực thuộc về giai cấp bóc lột, phục vụ lợi ích của giai cấp đó.",
    //     d: "Quyền lực nhân dân biến thành quyền lực của một nhóm người, phục vụ lợi ích của một nhóm người.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 109",
    //     question: "Đặc thù của gia đình khác với các đơn vị kinh tế khác là ở chổ:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Tài chính làm ra của gia đình nhỏ hơn rất nhiều so với các đơn vị kinh tế khác trong xã hội.",
    //     b: "Gia đình là đơn vị duy nhất sản xuất và tái sản xuất ra sức lao động cho xã hội.",
    //     c: "Gia đình là đơn vị duy nhất tham gia vào quá trình tái sản xuất ra sức lao động cho xã hội.",
    //     d: "Gia đình tham gia trực tiếp vào sản xuất và tái sản xuất tư liệu tiêu dùng.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 110",
    //     question: "Theo quan điểm của Ph.Ăngghen, trong giai đoạn đầu của xã hội cộng sản – chủ nghĩa xã hội:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Phải làm cho lực lượng sản xuất tăng lên ngay lập tức đến mức cần thiết để xây dựng nền kinh tế công hữu.",
    //     b: "Phải làm cho lực lượng sản xuất tăng nhanh lập tức đến mức cần thiết để xây dựng nền kinh tế công hữu.",
    //     c: "Có thể làm cho lực lượng sản xuất hiện có tăng lên ngay lập tức đến mức cần thiết để xây dựng nền kinh tế công hữu.",
    //     d: "Không thể được cũng y như không thể làm cho lực lượng sản xuất hiện có tăng lên ngay lập tức đến mức cần thiết để xây dựng nền kinh tế công hữu.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 111",
    //     question: "“Sự diệt vong không tránh khỏi của CNTB và sự thắng lợi tất yếu của CNXH” là luận chứng và khẳng định về phương diện chính trị – xã hội của:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Học thuyết về giá trị thặng dư.",
    //     b: "Chủ nghĩa duy vật lịch sử.",
    //     c: "Chủ nghĩa duy vật biện chứng.",
    //     d: "Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 112",
    //     question: "Chọn đáp án KHÔNG đúng. Phân loại cơ cấu xã hội:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Cơ cấu xã hội – dân cư, dân tộc, tôn giáo.",
    //     b: "Cơ cấu xã hội – nghề nghiệp.",
    //     c: "Cơ cấu xã hội – giai cấp.",
    //     d: "Cơ cấu xã hội – lao động.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 113",
    //     question: "Chủ nghĩa xã hội mà nước ta đang xây dựng có mấy đặc trưng cơ bản?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Tám đặc trưng.",
    //     b: "Bốn đặc trưng.",
    //     c: "Sáu đặc trưng.",
    //     d: "Mười đặc trưng.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 114",
    //     question: "Chọn đáp án đúng nhất. Cơ cấu xã hội là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan trong một chế độ xã hội nhất định, thông qua những mối quan hệ về sở hữu tư liệu sản xuất, tổ chức quản lý sản xuất.",
    //     b: "Những cộng đồng người cùng với mối quan hệ về sở hữu tư liệu sản xuất, về tổ chức quản lý quá trình sản xuất, về địa vị chính trị – xã hội … giữa con người với con người.",
    //     c: "Những cộng đồng người cùng toàn bộ những mối quan hệ xã hội do sự tác động lẫn nhau của các cộng đồng ấy tạo nên.",
    //     d: "Những cộng đồng người  và tầng lớp xã hội tồn tại khách quan trong một chế độ xã hội nhất định.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 115",
    //     question: "Thế giới quan của tôn giáo theo chủ nghĩa Mác – Lênin là gì?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Thế giới quan duy vật.",
    //     b: "Thế giới quan duy vật siêu hình.",
    //     c: "Thế giới quan duy tâm chủ quan.",
    //     d: "Thế giới quan duy tâm.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 116",
    //     question: "Sứ mệnh lịch sử của giai cấp công nhân thế giới hiện nay về nội dung kinh tế – xã hội là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Giải quyết mâu thuẫn lợi ích cơ bản giữa nhân dân lao động với nhà nước tư bản.",
    //     b: "Giải quyết mâu thuẫn lợi ích cơ bản giữa nhân dân lao động với các tập đoàn kinh tế tư bản.",
    //     c: "Giải quyết mâu thuẫn lợi ích cơ bản giữa giai cấp vô sản với nhà nước tư bản, thiết lập nhà nước XHCN, thực hiện tiến bộ và công bằng, dân chủ xã hội.",
    //     d: "Giải quyết mâu thuẫn lợi ích cơ bản giữa giai cấp công nhân với giai cấp tư sản, phấn đấu cho việc xác lập một trật tự xã hội mới công bằng và bình đẳng.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 117",
    //     question: "Một trong những đặc trưng cơ bản của chủ nghĩa xã hội ở Việt Nam là:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Có nền văn hóa tiến bộ, đậm đà bản sắc dân tộc.",
    //     b: "Có nền văn hóa hiện đại.",
    //     c: "Có di sản văn hóa vật thể và phi vật thể.",
    //     d: "Có nguồn lao động dồn dào.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 118",
    //     question: "Chất lượng dân số được đánh giá bằng yếu tố nào?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Tinh thần, niêm tin, mức sống.",
    //     b: "Tinh thần, trí tuệ, di truyền.",
    //     c: "Thể chất, tinh thần, nghề nghiệp.",
    //     d: "Thể chất, trí tuệ, tinh thần.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 119",
    //     question: "“Xây dựng chế độ làm chủ tập thể xã hội chủ nghĩa” gắn với “nắm vững chuyên chính vô sản” là quan điểm được nêu ra trong:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Đại hội Đảng toàn quốc lần thứ II.",
    //     b: "Đại hội Đảng toàn quốc lần thứ III.",
    //     c: "Đại hội Đảng toàn quốc lần thứ IV và lần thứ V.",
    //     d: "Đại hội Đảng toàn quốc lần thứ VI.",
    //     },
    //     correctAnswer: "c",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là c"
    //     },
    // {
    //     title: "Câu 120",
    //     question: "Chọn đáp án KHÔNG đúng. Chức năng cơ bản của gia đình:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Tái sản xuất ra con người và nuôi dưỡng, giáo dục con người.",
    //     b: "Kinh tế và tổ chức tiêu dùng.",
    //     c: "Thoả mãn nhu cầu tâm sinh lý, duy trì tình cảm gia đình.",
    //     d: "Giúp tổ chức xã hội được tốt hơn.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 121",
    //     question: "Quyền lao động thể hiện dân chủ trong lĩnh vực nào?",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Xã hội.",
    //     b: "Chính trị.",
    //     c: "Văn hóa.",
    //     d: "Kinh tế.",
    //     },
    //     correctAnswer: "a",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là a"
    //     },
    // {
    //     title: "Câu 122",
    //     question: "Theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học, chủ nghĩa xã hội có nhà nước kiểu mới mang bản chất của:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Giai cấp vô sản, đại biểu cho lợi ích của giai cấp công nhân, nông dân, lao động trí thức.",
    //     b: "Giai cấp công nhân, đại biểu cho lợi ích, quyền lực và ý chí của nhân dân lao động.",
    //     c: "Giai cấp nắm trong tay quyền lực về chính trị và đại biểu quyền lợi cho giai cấp thống trị ấy.",
    //     d: "Nhân dân và các tầng lớp người lao động trong xã hội.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    // {
    //     title: "Câu 123",
    //     question: "Nền sản xuất đại công nghiệp đã rèn luyện cho giai cấp công nhân những phẩm chất đặc biệt để đảm nhận vai trò lãnh đạo cách mạng:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Cần cù, chăm chỉ, sáng tạo.",
    //     b: "Chịu thương, chịu khó, đoàn kết.",
    //     c: "Chuyên môn, kỹ thuật cao, tinh thần hợp tác quốc tế, tâm lý giải phóng giai cấp vô sản thế giới.",
    //     d: "Tính tổ chức, kỷ luật lao động, tinh thần hợp tác và tâm lý lao động công nghiệp.",
    //     },
    //     correctAnswer: "d",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là d"
    //     },
    // {
    //     title: "Câu 124",
    //     question: "Để giải quyết việc làm, Nhà nước khuyến khích các doanh nghiệp:",
    //     background: "<img src='./img/bg_slide1.jpg'>",
    //     answers: {
    //     a: "Tạo ra nhiều sản phẩm.",
    //     b: "Tạo ra nhiều việc làm mới.",
    //     c: "Tăng thu nhập cho người lao động.",
    //     d: "Bảo vệ người lao động.",
    //     },
    //     correctAnswer: "b",
    //     correctAnswerText: "Đúng",
    //     falseAnswerText: "Sai, câu trả lời đúng là b"
    //     },
    {
        title: "Câu 125",
        question: "Chủ nghĩa xã hội khoa học nghiên cứu đối tượng trong lĩnh vực:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Chính trị – xã hội của đời sống xã hội.",
        b: "Kinh tế – chính trị của đời sống xã hội.",
        c: "Văn hoá – xã hội của đời sống xã hội.",
        d: "Văn hoá – chính trị của đời sống xã hội.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 126",
        question: "Trong thời kỳ quá độ lên CNXH ở Việt Nam, nhiệm vụ trung tâm mà giai cấp công nhân phải lãnh đạo thực hiện là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Thực hiện dân chủ trong lĩnh vực chính trị.",
        b: "Thực hiện mục tiêu dân giàu, nước mạnh.",
        c: "Phát triển văn hoá, xây dựng con người XHCN.",
        d: "Phát triển kinh tế, tiến hành công nghiệp hoá, hiện đại hoá.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 127",
        question: "Nội dung nào sau đây thuộc nội dung bổ sung của Ph.Ăngghen và C.Mác vào chủ nghĩa xã hội khoa học thời kì sau Công xã Pari đến 1895?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Tư tưởng xoá bỏ quan hệ sản xuất tư bản, xây dựng quan hệ sản xuất XHCN.",
        b: "Đập tan bộ máy nhà nước quan liêu, không đập tan toàn bộ bộ máy nhà nước tư sản nói chung.",
        c: "Tư tưởng đập tan nhà nước tư sản, thiết lập chuyên chính vô sản.",
        d: "Tư tưởng sự kết hợp đấu tranh giai cấp vô sản với phong trào đấu tranh của nông dân.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 128",
        question: "Nội dung nào sau đây không thuộc nội dung bổ sung của Ph.Ăngghen và C.Mác vào chủ nghĩa xã hội khoa học thời kì 1848 đến Công xã Pari?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Tư tưởng xoá bỏ quan hệ sản xuất tư bản, xây dựng quan hệ sản xuất XHCN.",
        b: "Tư tưởng đập tan nhà nước tư sản, thiết lập chuyên chính vô sản.",
        c: "Tư tưởng sự kết hợp đấu tranh giai cấp vô sản với phong trào đấu tranh của nông dân.",
        d: "Tư tưởng xây dựng khối liên minh giai cấp công nhân và giai cấp nông dân.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 129",
        question: "Chọn đáp án KHÔNG đúng. Dân tộc là cộng đồng chính trị – xã hội có đặc trưng cơ bản:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Có chung phương thức sinh hoạt kinh tế.",
        b: "Có lãnh thổ chung ổn định không bị chia cắt.",
        c: "Có sự quản lý của một nhà nước, nhà nước dân tộc độc lập.",
        d: "Có chung một ngôn ngữ giao tiếp.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 130",
        question: "Tác phẩm kinh điển chủ yếu của chủ nghĩa xã hội khoa học là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Tuyên ngôn của Đảng Cộng sản.",
        b: "Tuyên ngôn Đảng Cộng sản Việt Nam.",
        c: "Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân.",
        d: "Học thuyết về giá trị thặng dư.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 131",
        question: "Theo các nhà sáng lập chủ nghĩa xã hội khoa học, chủ nghĩa cộng sản ra đời dựa trên việc giải quyết mâu thuẫn giữa:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Sự ra đời của nền đại công nghiệp cơ khí với lợi ích của giai cấp vô sản.",
        b: "Sự phát triển của các công ty độc quyền với quyền lợi của đại bộ phận giai cấp công nhân.",
        c: "Sự phát triển của nhà nước tư bản độc quyền với quyền lợi của giai cấp vô sản và bần cùng hoá.",
        d: "Quan hệ sản xuất TBCN dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa với lực lượng sản xuất được cơ khí hoá, hiện đại hoá mang tính xã hội hoá cao.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 132",
        question: "Luận điểm nào sau đây không phải do V.I.Lênin viết bàn về những nguyên lý của chủ nghĩa xã hội khoa học trong thời kỳ mới?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Về chuyên chính vô sản; Thời kỳ quá độ chính trị từ CNTB lên CNCS.",
        b: "Về chế độ dân chủ: không có dân chủ thuần tuý hay dân chủ nói chung.",
        c: "Về thời kỳ quá độ chính trị từ các nước không qua giai đoạn tư bản tiến lên CNXH.",
        d: "Về cải cách hành chính bộ máy nhà nước và cương lĩnh xây dựng CNXH ở Nga.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 133",
        question: "Theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học, đặc trưng cơ bản của giai đoạn đầu của xã hội cộng sản gồm mấy đặc trưng?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "4 đặc trưng.",
        b: "5 đặc trưng.",
        c: "6 đặc trưng.",
        d: "7 đặc trưng.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 134",
        question: "“Tư liệu sản xuất chuyển thành tài sản chung, thì gia đình cá thể sẽ không còn là đơn vị kinh tế xã hội nữa. Việc nuôi dạy con cái trở thành công việc của xã hội”. Phát biểu này của ai?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Hồ Chí Minh.",
        b: " C.Mac.",
        c: "V.I.Lênin.",
        d: "Ph.Ăngghen.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 135",
        question: "Đời sống của nhân dân giữa những vùng, miền của đất nước còn có sự chênh lệch là đặc điểm của thời kì quá độ trong lĩnh vực nào?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Chính trị.",
        b: "Kinh tế.",
        c: "Tư tưởng và văn hóa.",
        d: "Xã hội.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 136",
        question: "Theo Ph.Ăngghen, với tư cách là một hình thái nhà nước, một chế độ chính trị thì trong lịch sử nhân loại, cho đến nay có mấy chế độ dân chủ ra đời?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "2 (dân chủ tư sản; dân chủ XHCN).",
        b: "3 (dân chủ nguyên thuỷ; dân chủ tư sản; dân chủ XHCN).",
        c: "4 (dân chủ nguyên thuỷ; dân chủ chủ nô; dân chủ tư sản; dân chủ XHCN).",
        d: "3 (dân chủ chủ nô; dân chủ tư sản; dân chủ XHCN).",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 137",
        question: "Cơ sở, nền tảng pháp lý cho sự tồn tại và hình thành nên các mối quan hệ khác trong gia đình là gì?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Quan hệ huyết thống.",
        b: "Quan hệ kinh tế.",
        c: "Quan hệ nuôi dưỡng.",
        d: "Quan hệ hôn nhân.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 138",
        question: "Việc hình thành khối liên minh công, nông, trí trong thời kỳ quá độ lên CNXH xuất phát từ:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Nhu cầu của cuộc cách mạng khoa học công nghệ.",
        b: "Nhu cầu và lợi ích kinh tế của chính họ.",
        c: "Nhu cầu của công nghiệp hoá, hiện đại hoá.",
        d: "Nhu cầu trở thành lãnh đạo xã hội của giai cấp công nhân.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 139",
        question: "Nhà nước XHCN ra đời là kết quả của:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Cách mạng do giai cấp vô sản lãnh đạo, đập tan nhà nước tư sản.",
        b: "Cách mạng do giai cấp vô sản lãnh đạo, đập tan nhà nước tư sản, xây dựng nhà nước của giai cấp vô sản.",
        c: "Cách mạng do giai cấp vô sản và nhân dân lao động tiến hành dưới sự lãnh đạo của Đảng Cộng sản.",
        d: "Cách mạng do giai cấp công nhân, nông dân tiến hành dưới sự lãnh đạo của Đảng Cộng sản.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 140",
        question: "Hiện nay ở Việt Nam, đội ngũ doanh nhân được Đảng chủ trương xây dựng thành:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Một đội ngũ đặc biệt.",
        b: "Một đội ngũ vững mạnh.",
        c: "Một đội ngũ tiềm năng.",
        d: "Một đội ngũ quan trọng.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 141",
        question: "Sự phát triển của giai cấp công nhân được qui định bởi:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Sự phát triển của giai cấp tư sản công nghiệp.",
        b: "Sự phát triển của giai cấp vô sản đại công nghiệp.",
        c: "Sự phát triển của phong trào công nhân quốc tế.",
        d: "Sự phát triển của chủ nghĩa đế quốc.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 142",
        question: "Theo quan điểm của V.I.Lênin, công thức ra đời chủ nghĩa xã hội dưới chế độ xô viết. Chọn đáp án đúng nhất.",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Chính quyền xô viết + Trật tự ở đường sắt Phổ + Kỹ thuật và cách tổ chức các tơ rớt Mỹ + Ngành giáo dục quốc dân Mỹ etc. etc. + + = ∑(tổng số) = chủ nghĩa xã hội.",
        b: "Chính quyền cộng sản + Trật tự ở đường sắt Phổ + Kỹ thuật và cách tổ chức các tơ rớt Mỹ + Ngành giáo dục quốc dân Mỹ etc. etc. + + = ∑(tổng số) = chủ nghĩa xã hội.",
        c: "Chính quyền xô viết + Trật tự xã hội + Kỹ thuật và cách tổ chức các tơ rớt Mỹ + Ngành giáo dục quốc dân Mỹ etc. etc. + + = ∑(tổng số) = chủ nghĩa xã hội.",
        d: "Chính quyền xô viết + Tự do, bình đẳng, bác ái của Pháp + Kỹ thuật và cách tổ chức các tơ rớt Mỹ + Ngành giáo dục quốc dân Mỹ etc. etc. + + = ∑(tổng số) = chủ nghĩa xã hội.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 143",
        question: "“Với việc sản xuất ra tư liệu tiêu dùng, tư liệu sản xuất, tái sản xuất ra con người, gia đình như một tế bào tự nhiên, là một đơn vị cơ sở để tạo nên cơ thể – xã hội”. Câu trích dẫn này của ai?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Hồ Chí Minh.",
        b: "V.I.Lênin.",
        c: "C.Mac. ",
        d: "Ph.Ăngghen.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 144",
        question: "Quyền nào thể hiện dân chủ trong lĩnh vực văn hóa?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Quyền được đảm bảo về mặt tinh thần khi không còn khả năng lao động.",
        b: "Quyền tham gia thảo luận các vấn đề chung của cả nước.",
        c: "Quyền được thông tin, tự do ngôn luận, tự do báo chí.",
        d: "Quyền được hưởng lợi ích từ sáng tạo nghệ thuật của mình.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 145",
        question: "Văn kiện nào đánh dấu sự ra đời của chủ nghĩa xã hội khoa học?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Tuyên ngôn của Đảng Cộng sản.",
        b: "Tuyên ngôn độc lập Mỹ – 1776.",
        c: "Tuyên ngôn nhân quyền và dân quyền Pháp – 1791.",
        d: "Tuyên ngôn Đảng Cộng sản Việt Nam.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 146",
        question: "Theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học, trong chủ nghĩa xã hội phải thiết lập nhà nước:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Chuyên chính cộng sản.",
        b: "Chuyên chính dân tộc.",
        c: "Chuyên chính vô sản.",
        d: "Của dân, do dân, vì dân.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 147",
        question: "Quá độ từ xã hội tiền tư bản lên chủ nghĩa xã hội, bỏ qua giai đoạn phát triển tư bản chủ nghĩa là quá độ:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Gián tiếp.",
        b: "Nhảy vọt.",
        c: "Đứt quãng.",
        d: "Không cơ bản.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 148",
        question: "Theo các nhà nghiên cứu CNHX khoa học, việc xây dựng gia đình dựa trên cơ sở kinh tế, chính trị mà thiếu đi cơ sở văn hoá thì dẫn đến:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Việc xây dựng gia đình sẽ khó khăn trăm bề.",
        b: "Việc xây dựng gia đình sẽ không đảm bảo được hạnh phúc.",
        c: "Việc xây dựng gia đình sẽ lệch lạc, không đạt hiệu quả cao.",
        d: "Việc xây dựng gia đình sẽ không đạt được gia đình văn hoá.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 149",
        question: "Chọn đáp án KHÔNG đúng. Ưu điểm của chủ nghĩa xã hội không tưởng là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Thể hiện tinh thần phê phán, lên án chế độ quân chủ chuyên chế và chế độ TBCN bất công.",
        b: "Đưa ra nhiều luận điểm có giá trị về xã hội tương lai; về tổ chức sản xuất, phân phối; vai trò của khoa học, công nghệ; giải phóng lao động, giải phóng phụ nữ.",
        c: "Thức tỉnh giai cấp công nhân và người lao động trong cuộc đấu tranh chống chế độ quân chủ chuyên chế và chế độ TBCN bất công.",
        d: "Giúp chủ nghĩa tư bản chuyển từ tự do cạnh tranh sang độc quyền, chuẩn bị nền tảng kinh tế, xã hội cho giai cấp công nhân.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 150",
        question: "C.Mác và Ph.Ăngghen bắt đầu nghiên cứu các phong trào đấu tranh của giai cấp công nhân ở đâu và thời gian nào?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Châu Âu, ở Anh, Pháp vào giữa thế kỷ XIX.",
        b: "Châu Âu, ở Đức, Liên Xô vào giữa thế kỷ XIX.",
        c: "Châu Mỹ, ở Mỹ, Cuba vào giữa thế kỷ XIX.",
        d: "Châu Âu, ở Anh, Pháp vào đầu thế kỷ XIX.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 151",
        question: "Chọn đáp án đúng nhất. Quan niệm gia đình được hiểu là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Một cộng đồng người cá biệt, có vai trò xây dựng nên một xã hội.",
        b: "Hai người kết hôn, tiến tới việc sinh dưỡng thế hệ tương lai của loài người.",
        c: "Một cộng đồng người đặc biệt, có vai trò quyết định đến sự tồn tại và phát triển của xã hội.",
        d: "Một đơn vị đặc biệt quan trọng, là viên gạch đầu tiên để xây dựng nên ngôi nhà xã hội.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 152",
        question: "Chủ nghĩa xã hội khoa học ra đời từ tiền đề là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Sự chuyển biến lập trường triết học và lập trường chính trị của C. Mác và Ph. Ăngghen.",
        b: "Sự chuyển biến lập trường triết học và lập trường chính trị của Lênin.",
        c: "Sự chuyển biến lập trường triết học và lập trường chính trị của C. Mác; Ph. Ăngghen và Lênin.",
        d: "Sự chuyển biến lập trường triết học và lập trường chính trị từ duy tâm sang duy vật.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 153",
        question: "Chọn đáp án KHÔNG đúng. Chủ nghĩa xã hội là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Phong trào thực tiễn, phong trào đấu tranh của nhân dân lao động chống lại áp bức, bất công, chống lại giai cấp thống trị.",
        b: "Trào lưu tư tưởng, lý luận phản ánh lý tưởng giải phóng nhân dân lao động ra khỏi ách áp bức, bóc lột, bất công.",
        c: "Một khoa học về sứ mệnh lịch sử của giai cấp công nhân; một chế độ xã hội tốt đẹp.",
        d: "Một lý tưởng mới về xã hội đại đồng, xã hội công bằng và tự trị.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 154",
        question: "Dân chủ xã hội chủ nghĩa là nền dân chủ:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Tuyệt đối nhất.",
        b: "Hoàn bị nhất.",
        c: "Rộng rãi nhất và triệt để nhất.",
        d: "Phổ biến nhất trong lịch sử.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 155",
        question: "Nhân tố chủ quan quan trọng nhất để giai cấp công nhân thực hiện thắng lợi sứ mệnh lịch sử của mình là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Đảng Cộng sản.",
        b: "Đảng Cộng sản Việt Nam.",
        c: "Liên minh giai cấp công nhân với giai cấp nông dân và các tầng lớp khác trong xã hội.",
        d: "Quốc tế Cộng sản.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 156",
        question: "Chủ nghĩa Mác – Lênin lưu ý: Càng hoàn thiện bao nhiêu, nền dân chủ XHCN lại càng tự tiêu vong bấy nhiêu. Điều này được hiểu là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Tính chính trị của dân chủ sẽ mất đi, dân chủ trở thành một thói quen, một tập quán trong sinh hoạt xã hội.",
        b: "Tính dân chủ sẽ mất đi cùng với chế độ nhà nước cũng tiêu vong, không còn nữa.",
        c: "Tính dân chủ sẽ mất đi, thay vào đó là thực hiện dân chủ cộng sản chủ nghĩa.",
        d: "Tính quân chủ sẽ mất đi cùng với chế độ nhà nước cũng tiêu vong, không còn nữa.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 157",
        question: "Trong xã hội phong kiến để duy trì chế độ bóc lột với quan hệ gia trưởng thì qui định đối với người phụ nữ là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Chung thuỷ một chồng, nội trợ gia đình.",
        b: "Cha mẹ đặt đâu con ngồi đấy.",
        c: "Tuân thủ đầy đủ “tàm tòng”, “tứ đức”.",
        d: "Công, dung, ngôn, hạnh, hiếu thảo trong gia đình.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 158",
        question: "Quan điểm nào sau đây là sự vận dụng sáng tạo nguyên lý cơ bản của chủ nghĩa xã hội khoa học của Lênin?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Cách mạng giải phóng dân tộc bản thân nó được giải quyết trong cách mạng vô sản.",
        b: "Cách mạng vô sản có thể nổ ra và thắng lợi một số nước, nơi CNTB chưa phải phát triển nhất.",
        c: "Cách mạng giải phóng dân tộc có khản năng nổ ra và giành thắng lợi trước cách mạng vô sản.",
        d: "Cách mạng giải phóng dân tộc phụ thuộc vào cách mạng vô sản ở chính quốc.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 159",
        question: "Căn cứ vào phạm vi tác động của quyền lực nhà nước, chức năng Nhà nước xã hội chủ nghĩa được chia thành:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Chức năng đối nội, chức năng đối ngoại.",
        b: "Chức năng kinh tế, chức năng chính trị.",
        c: "Chức năng giai cấp, chức năng xã hội.",
        d: "Chức năng đối nội, chức năng chính trị.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 160",
        question: "Bản chất dân chủ XHCN ở Việt Nam. Chọn đáp án KHÔNG đúng.",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Được thực hiện ưu tiên trong lĩnh vực chính trị.",
        b: "Vừa là mục tiêu, vừa là động lực để xây dựng chủ nghĩa xã hội.",
        c: "Gắn liền với pháp luật.",
        d: "Do nhân dân làm chủ, quyền lực thuộc về nhân dân.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 161",
        question: "Phát kiến vĩ đại của Mác và Ăngghen cho tiền đề lý luận chủ nghĩa xã hội khoa học là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Chủ nghĩa duy vật lịch sử; Học thuyết giá trị thặng dư.",
        b: "Chủ nghĩa duy vật lịch sử; Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp Công nhân.",
        c: "Chủ nghĩa duy vật lịch sử; Học thuyết giá trị thặng dư; Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp Công nhân.",
        d: "Chủ nghĩa duy vật lịch sử; Học thuyết các hình thái kinh tế xã hội; Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp Công nhân.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 162",
        question: "Chọn đáp án đúng nhất. Kết quả tất yếu của hôn nhân xuất phát từ tình yêu:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Gia đình hạnh phúc.",
        b: "Kết hôn.",
        c: "Hôn nhân một vợ một chồng.",
        d: "Được sự chứng nhận của pháp luật.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 163",
        question: "Chức năng “trấn áp” của nhà nước XHCN là để:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Duy trì địa vị của giai cấp nắm quyền chiếm hữu tư liệu sản xuất chủ yếu của xã hội.",
        b: "Thể hiện quyền lực của giai cấp vô sản đối với giai cấp tư sản.",
        c: "Trấn áp giai cấp tư sản, trấn áp những phần tử chống đối giai cấp vô sản.",
        d: "Trấn áp giai cấp bóc lột đã bị lật đổ và phần tử chống đối để bảo vệ thành quả cách mạng.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 164",
        question: "Sứ mệnh lịch sử của giai cấp công nhân không phải là thay thế chế độ sở hữu tư nhân này bằng một chế độ sở hữu tư nhân khác mà là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Xoá bỏ triệt để chế độ tư hữu về tư liệu sản xuất.",
        b: "Xoá bỏ triệt để chế độ công hữu về tư liệu sản xuất.",
        c: "Xoá bỏ triệt để chế độ tàn dư tư bản chủ nghĩa.",
        d: "Xoá bỏ triệt để chế độ tàn dư phong kiến.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 165",
        question: "Dân chủ XHCN đánh dấu sự manh nha ra đời từ thực tiễn nào?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Công nghiệp hơi nước ở Anh năm 1791.",
        b: "Đấu tranh giai cấp ở Pháp và Công xã Pari năm 1871.",
        c: "Đấu tranh giành chính quyền ở Mỹ năm 1776.",
        d: "Cách mạng Tháng 10/1917 ở Nga.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 166",
        question: "Mối quan hệ nào sau đây không phải là quan hệ huyết thống trong gia đình?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Ông nội – Cháu nội.",
        b: "Vợ – Chồng.",
        c: "Con Cô – Con cậu.",
        d: "Anh trai – Em gái.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 167",
        question: "Có mấy loại hình quá độ lên cộng sản chủ nghĩa theo quan điểm của C.Mác và Ph.Ăngghen?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "1 (Từ hình thái kinh tế – xã hội chủ nghĩa tư bản lên hình thái kinh tế – xã hội cộng sản chủ nghĩa).",
        b: "2 (Từ hình thái kinh tế – xã hội thấp hơn, bỏ qua chủ nghĩa tư bản lên cộng sản chủ nghĩa và từ hình thái kinh tế – xã hội tư bản chủ nghĩa phát triển lên chủ nghĩa cộng sản).",
        c: "1 (Từ hình thái kinh tế – xã hội phong kiến lên hình thái kinh tế – xã hội cộng sản chủ nghĩa).",
        d: "2 (Từ Từ hình thái kinh tế – xã hội phong kiến lên hình thái kinh tế – xã hội cộng sản chủ nghĩa và từ hình thái kinh tế – xã hội chủ nghĩa tư bản lên hình thái kinh tế – xã hội cộng sản chủ nghĩa).",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 168",
        question: "Tiền đề tư tưởng lý luận cho sự ra đời của chủ nghĩa xã hội khoa học là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Triết học cổ điển Đức; Kinh tế chính trị học cổ điển Anh; Chủ nghĩa không tưởng phê phán.",
        b: "Triết học cổ điển Anh; Kinh tế chính trị học cổ điển Anh; Chủ nghĩa phê phán.",
        c: "Triết học cổ điển Pháp; Kinh tế chính trị học cổ điển Anh; Chủ nghĩa không tưởng phê phán.",
        d: "Triết học Mác - Lênin; Kinh tế chính trị học cổ điển Anh; Chủ nghĩa không tưởng phê phán.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 169",
        question: "“Bước thứ hai và là bước chủ yếu là thủ tiêu chế độ tư hữu ruộng đất…có như thế mới mở đường giải phóng hoàn toàn và thật sự cho phụ nữ, thủ tiêu được chế độ nô lệ gia đình”. Phát biểu này của ai?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Hồ Chí Minh.",
        b: "C.Mac.",
        c: "V.I.Lênin.",
        d: "Ph.Ăngghen.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 170",
        question: "Cơ sở phương pháp luận cho các nhà sáng lập chủ nghĩa xã hội khoa học là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Học thuyết Tiến hoá; Định luật Neuton; Định luật Talet.",
        b: "Học thuyết Tiến hoá; Định luật Neuton; Học thuyết tế bào.",
        c: "Học thuyết Tiến hoá; Định luật Bảo toàn và chuyển hoá năng lượng; Học thuyết tế bào.",
        d: "Học thuyết Tiến hoá; Định luật Neuton; Định luật Bảo toàn và chuyển hoá năng lượng.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 171",
        question: "Quyền nào sau đây là một trong những nội dung của dân chủ trong lĩnh vực chính trị?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Quyền sáng tác văn học.",
        b: "Quyền tự do báo chí.",
        c: "Quyền lao động.",
        d: "Quyền bình đẳng nam nữ.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 172",
        question: "“Học thuyết của Mác là học thuyết vạn năng vì nó là một học thuyết chính xác”, đánh giá này của ai?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Ph. Ăngghen.",
        b: "Hồ Chí Minh.",
        c: "D. Ricacdo.",
        d: "V.I. Lênin.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 173",
        question: "Chọn đáp án đúng nhất. Cơ cấu xã hội - giai cấp là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Những cộng đồng người cùng toàn bộ những mối quan hệ xã hội do sự tác động lẫn nhau của các cộng đồng ấy tạo nên.",
        b: "Hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan trong một chế độ xã hội nhất định, thông qua những mối quan hệ về sở hữu, về tổ chức sản xuất… giữa các giai cấp và tầng lớp đó.",
        c: "Hệ thống các giai cấp, tầng lớp xã hội tồn tại chủ quan trong một chế độ xã hội nhất định, thông qua những mối quan hệ về sở hữu, về tổ chức sản xuất… giữa các giai cấp và tầng lớp đó.",
        d: "Những cộng đồng người cùng với mối quan hệ về sở hữu tư liệu sản xuất, về tổ chức quản lý quá trình sản xuất, về địa vị chính trị – xã hội … giữa con người với con người.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 174",
        question: "Chọn đáp án KHÔNG đúng. Về văn hoá, xã hội, nhà nước XHCN được xây dựng trên nền tảng:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Lý luận của chủ nghĩa Mác – Lênin.",
        b: "Giá trị văn hoá Phương Tây.",
        c: "Giá trị văn hoá tiên tiến, tiến bộ của nhân loại.",
        d: "Bản sắc văn hoá tiên tiến, đậm đà riêng biệt của dân tộc.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 175",
        question: "Chọn đáp án đúng nhất. Nước ta đang ở giai đoạn phát triển nào?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Chế độ cộng sản chủ nghĩa.",
        b: "Chế độ xã hội chủ nghĩa.",
        c: "Thời kì quá độ lên chủ nghĩa xã hội bỏ qua giai đoạn phát triển tư bản chủ nghĩa.",
        d: "Thời kì quá độ lên chủ nghĩa xã hội.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 176",
        question: "Bản chất kinh tế của nền dân chủ XHCN khác với nền dân chủ tư sản là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Chế độ công hữu tư liệu sản xuất và thực hiện chế độ phân phối theo kết quả lao động.",
        b: "Chế độ công hữu tư liệu sản xuất chủ yếu và thực hiện chế độ phân phối lợi ích theo kết quả lao động là chủ yếu.",
        c: "Chế độ sở hữu chung tư liệu sản xuất xã hội và thực hiện chế độ phân phối lợi ích theo kết quả lao động là chủ yếu.",
        d: "Chế độ công hữu tư liệu sản xuất chủ yếu và thực hiện chế độ phân phối lợi ích theo nhu cầu người lao động.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 177",
        question: "Nền dân chủ xã hội chủ nghĩa là nền dân chủ:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Của tất cả mọi người trong xã hội.",
        b: "Của những người lãnh đạo.",
        c: "Của nhân dân lao động.",
        d: "Của giai cấp công nhân.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 178",
        question: "Các nhà sáng lập chủ nghĩa xã hội khoa học đã thừa nhận chủ nghĩa cộng sản ra đời dựa trên vai trò to lớn của:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "C.Mác và Ph.Ăngghen.",
        b: "C.Mac, Ph.Ăngghen và V.I.Lênin.",
        c: "Chủ nghĩa tư bản.",
        d: "V.I.Lênin và cách mạng tháng 10/1917 – Nga.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 179",
        question: "Hành vi, việc làm nào sau đây vi phạm chính sách dân số của Đảng và Nhà nước?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Tuyên truyền, phổ biến biện pháp kế hoạch hóa gia đình.",
        b: "Cung cấp các phương tiện tránh thai.",
        c: "Cung cấp các dịch vụ dân số.",
        d: "Lựa chọn giới tính thai nhi dưới mọi hình thức.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 180",
        question: "Chọn đáp án đúng nhất. Hôn nhân tiến bộ là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Xuất phát từ tính tự nguyện của hai bên gia đình.",
        b: "Xuất phát từ hợp đồng được ký trước pháp luật.",
        c: "Xuất phát từ tính tự nguyện của một bên Nam hay Nữ.",
        d: "Xuất phát từ tình yêu lứa đôi.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 181",
        question: "Ở Việt Nam, quá độ lên CNXH bỏ qua chế độ TBCN, tức là bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng TBCN. Nghĩa là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Thời kỳ quá độ không còn quan hệ bóc lột và bị bóc lột.",
        b: "Thời kỳ quá độ vẫn còn quan hệ bóc lột và bị bóc lột, song quan hệ bóc lột tư bản chủ nghĩa không giữ vai trò thống trị.",
        c: "Thời kỳ quá độ vẫn còn quan hệ bóc lột và bị bóc lột, song quan hệ bóc lột xã hội chủ nghĩa không giữ vai trò thống trị.",
        d: "Thời kỳ quá độ vẫn còn quan hệ bóc lột và bị bóc lột, song quan hệ bóc lột tư bản chủ nghĩa dần dần bị xoá bỏ.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 182",
        question: "Chọn đáp án đúng nhất. Theo V.I.Lênin, nội dung chủ yếu và mục đích cuối cùng của nhà nước XHCN là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Giải phóng toàn bộ người lao động trong xã hội.",
        b: "Cải tạo xã hội cũ, xây dựng thành công xã hội mới.",
        c: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
        d: "Giải phóng toàn bộ người lao động trong xã hội, phát triển toàn bộ cá nhân.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 183",
        question: "Nền dân chủ xã hội chủ nghĩa gắn liền với:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Đạo đức.",
        b: "Phong tục.",
        c: "Truyền thống.",
        d: "Pháp luật.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 184",
        question: "“Ở các nước XHCN, giai cấp công nhân thông qua quá trình công nghiệp hoá và thực hiện […] để tăng năng suất lao động xã hội”. Chọn cụm từ đúng vào chỗ trống.",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Một kiểu tổ chức kinh tế mới.",
        b: "Một kiểu tổ chức sản xuất mới.",
        c: "Một kiểu tổ chức xã hội mới về lao động.",
        d: "Một kiểu tổ chức công nghiệp hoá mới về lao động.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 185",
        question: "Trong chính sách tôn giáo của Đảng và Nhà nước ta hiện nay, nội dung cốt lõi của công tác tôn giáo là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Công tác vận động quần chúng nêu cao tinh thần yêu nước, ý thức bảo vệ độc lập và thống nhất Tổ quốc.",
        b: "Công tác giáo dục quần chúng nêu cao tinh thần yêu nước, ý thức bảo vệ độc lập và thống nhất Tổ quốc.",
        c: "Công tác tuyên truyền tư tưởng tốt đẹp của tôn giáo, ý thức bảo vệ độc lập và thống nhất Tổ quốc.",
        d: "Công tác đào tạo quần chúng nêu cao tinh thần yêu nước, ý thức bảo vệ độc lập và thống nhất Tổ quốc.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 186",
        question: "Theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học, trong chủ nghĩa xã hội, văn hoá là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Tiền đề tinh thần của xã hội, rèn luyện bản lĩnh người cách mạng, biến con người thành có ích cho xã hội.",
        b: "Tiền đề quan trọng cho sự phát triển kinh tế, xã hội, hun đúc và rèn luyện con người thành con người xã hội chủ nghĩa.",
        c: "Tiền đề quan trọng cho sự phát triển kinh tế, xã hội, văn hoá phải soi đường cho quốc dân đi.",
        d: "Nền tảng tinh thần, mục tiêu, động lực phát triển xã hội, trọng tâm là phát triển kinh tế.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 187",
        question: "Theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học, cách mạng vô sản là cuộc cách mạng của:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Giai cấp tư sản tiến bộ lãnh đạo, cùng với tầng lớp trí thức có tư tưởng tiến bộ, hoà bình.",
        b: "Giai cấp công nhân và nhân dân lao động dưới sự lãnh đạo của Đảng Cộng sản.",
        c: "Giai cấp vô sản, tầng lớp tri thức và nhân dân lao động trong xã hội tư bản.",
        d: "Liên minh giai cấp công nhân – nông dân với các tầng lớp lao động trong xã hội tư bản.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 188",
        question: "Điều kiện khách quan của sứ mệnh giai cấp công nhân do:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Địa vị kinh tế và địa vị xã hội của giai cấp công nhân qui định.",
        b: "Địa vị chính trị và địa vị xã hội của giai cấp công nhân qui định.",
        c: "Địa vị kinh tế, chính trị – xã hội của giai cấp công nhân qui định.",
        d: "Địa vị lịch sử khách quan và mâu thuẫn khách quan trong phương thức sản xuất tư bản qui định.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 189",
        question: "Nội dung văn hoá, xã hội của liên minh giai cấp, tầng lớp ở Việt Nam đòi hỏi phải:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Gắn tăng trưởng kinh tế với phát triển văn hoá, phát triển, xây dựng con người và thực hiện tiến bộ, công bằng xã hội.",
        b: "Gắn tăng trưởng kinh tế với phát triển văn hoá, phát triển, xây dựng con người và thực hiện giải quyết việc làm cho người lao động.",
        c: "Gắn tăng trưởng kinh tế với phát triển văn hoá, thực hiện tiến bộ, công bằng xã hội.",
        d: "Gắn phát triển kinh tế với văn hoá, xây dựng con người mới và thực hiện tiến bộ, công bằng xã hội.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 190",
        question: "Căn cứ vào phạm vi tác động của quyền lực nhà nước, chức năng của nhà nước XHCN được chia thành:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Chức năng chính trị; chức năng quân sự.",
        b: "Chức năng kinh tế; chức năng văn hoá, xã hội.",
        c: "Chức năng đối nội; chức năng đối ngoại.",
        d: "Chức năng trấn áp; chức năng tổ chức và xây dựng.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 191",
        question: "Những nội dung khái quát về một Nhà nước pháp quyền XHCN Việt Nam được thể hiện trong:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Cương lĩnh chính trị đầu tiên của Đảng.",
        b: "Chính cương vắn tắt và sách lược vắn tắt.",
        c: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội.",
        d: "Cương lĩnh xây dựng đất nước trong thời kỳ kháng chiến, kiến quốc.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 192",
        question: "Quá trình phát triển của dân chủ XHCN từ thấp tới cao, có sự kế thừa chọn lọc trước hết giá trị của nền dân chủ nào?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Dân chủ nguyên thuỷ.",
        b: "Dân chủ chủ nô.",
        c: "Dân chủ xã hội chủ nghĩa.",
        d: "Dân chủ tư sản.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 193",
        question: "Chọn đáp án KHÔNG đúng. Ở các nước quá độ lên CNXH với xuất phát điểm thấp, cơ cấu kinh tế biến đổi:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Từ nông nghiệp, công nghiệp sơ khai sang tăng tỉ trọng công nghiệp và dịch vụ, giảm tỉ trọng nông nghiệp.",
        b: "Từ cơ cấu vùng lãnh thổ chưa định hình sang hình thành các vùng, các trung tâm kinh tế lớn.",
        c: "Từ cơ cấu lực lượng sản xuất hiện đại nhưng không cân đối sang phát triển lực lượng sản xuất với trình độ công nghệ cao.",
        d: "Từ phương thức sản xuất thấp kém lạc hậu sang phương thức sản xuất hiện đại, tiên tiến hơn.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 194",
        question: "Theo quan điểm của chủ nghĩa Mác – Lênin, trong thời kỳ quá độ, chức năng trấn áp của nhà nước XHCN thể hiện:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Tồn tại như một tất yếu.",
        b: "Tồn tại nhưng không cần thiết.",
        c: "Tồn tại trong thời kì đầu của CNXH.",
        d: "Không cần tồn tại.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 195",
        question: "Sự hình thành và phát triển của Chủ nghĩa xã hội khoa học trải qua những thời kỳ nào sau đây?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "C. Mác và Ph. Ăngghen phát triển chủ nghĩa xã hội khoa hoc; Lênin vận dụng và phát triển trong điều kiện mới; Sự vận dụng và phát triển sáng tạo sau Lênin đến nay.",
        b: "Trước công xã Pari; Sau công xã Pari; Trước cách mạng tháng Mười Nga;  Sau cách mạng tháng Mười Nga.",
        c: "Trước công xã Pari; Sau công xã Pari; Trước cách mạng tháng Mười Nga;  Sau cách mạng tháng Mười Nga; Sự vận dụng và phát triển sáng tạo sau Lênin đến nay.",
        d: "Từ 1848 đến Công xã Pari (1871); Sau Công xã Pari đến 1895; Trước cách mạng tháng Mười Nga;  Sau cách mạng tháng Mười Nga.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 196",
        question: "Quan niệm dân gian nào ảnh hưởng xấu đến chính sách dân số của Nhà nước?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Cơn hơn cha là nhà có phước.",
        b: "Một giọt máu đào hơn ao nước lã.",
        c: "Cha mẹ sinh con trời sinh tính.",
        d: "Đông con hơn nhiều của.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 197",
        question: "Thực hiện sứ mệnh lịch sử của mình trên lĩnh vực văn hoá, tư tưởng cần tập trung xây dựng hệ giá trị mới bao gồm:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Lao động; công bằng; dân chủ; bình đẳng và tự do.",
        b: "Lao động; công chính; dân chủ; tự do và bác ái.",
        c: "Công bằng; dân chủ; văn minh; tự do và bác ái.",
        d: "Dân chủ; công bằng; văn minh; bình đẳng và tự do.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 198",
        question: "Trong hệ thống xã hội, mỗi loại hình cơ cấu xã hội có vị trí và vai trò:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Hợp tác với nhau.",
        b: "Phụ thuộc lẫn nhau.",
        c: "Song song ngang nhau.",
        d: "Không ngang nhau.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 199",
        question: "Chủ nghĩa xã hội theo thuật ngữ tiếng Anh được viết là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Socialism.",
        b: "Political Economic.",
        c: "Philosophy.",
        d: "Social democracy.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 200",
        question: "Các tôn giáo hiện nay ở Việt Nam hoạt động:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Không cần dựa trên quy chuẩn pháp luật.",
        b: "Không cần dựa trên quy chuẩn đạo đức.",
        c: "Đan xen, hỗ trợ với nhau cùng phát triển.",
        d: "Bình đẳng trong khuôn khổ pháp luật.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 201",
        question: "Các dân tộc trong cộng đồng Việt Nam bình đẳng, đoàn kết, tương trợ và giúp đỡ lẫn nhau cùng tiến bộ là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Điểm mới trong xã hội Việt Nam.",
        b: "Đặc trưng cơ bản của chủ nghĩa xã hội ở Việt Nam.",
        c: "Biểu hiện của sự phát triển của các dân tộc.",
        d: "Đặc trưng quan trọng để xây dựng và phát triển đất nước.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 202",
        question: "Chọn đáp án KHÔNG đúng với sứ mệnh của nhà nước XHCN:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Xây dựng thành công chủ nghĩa xã hội.",
        b: "Đưa nhân dân lao động lên làm địa vị làm chủ trên tất cả các mặt của đời sống.",
        c: "Chăm lo cho lợi ích của đại đa số nhân dân lao động.",
        d: "Giải quyết mâu thuẫn trong xã hội; thực hiện xoá đói, giảm nghèo; thực hiện tiến bộ và công bằng xã hội.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 203",
        question: "Mâu thuẫn thể hiện tính chất đối kháng không thể điều hoà giữa giai cấp công nhân và giai cấp tư sản:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Mâu thuẫn về lợi ích kinh tế.",
        b: "Mâu thuẫn về lợi ích chính trị.",
        c: "Mâu thuẫn về chế độ tư hữu về tư liệu sản xuất.",
        d: "Mâu thuẫn giữa lực lượng sản xuất xã hội hoá ngày càng rộng lớn với quan hệ sản xuất TBCN.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 204",
        question: "Về chính trị, nhà nước XHCN mang bản chất của:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Giai cấp công nhân – giai cấp có lợi ích phù hợp với lợi ích chung của quần chúng nhân dân lao động.",
        b: "Giai cấp thống trị, nhằm bảo vệ và duy trì địa vị của mình.",
        c: "Giai cấp vô sản, nhằm giải phóng giai cấp của mình và giải phóng tất cả các tầng lớp nhân dân lao động khác trong xã hội.",
        d: "Giai cấp công nhân, nông dân và lao động trí óc.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 205",
        question: "Trong tác phẩm nào sau đây phản ánh hạn chế của chủ nghĩa xã hội không tưởng:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Tuyên ngôn Đảng Cộng sản – Mác, Ăngghen.",
        b: "Ba nguồn gốc, ba bộ phận hợp thành chủ nghĩa Mác – V.I.Lênin.",
        c: "Chống Đuyrinh – Ph.Ăngghen.",
        d: "Làm gì? - V.I.Lênin.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 206",
        question: "Chọn đáp án KHÔNG đúng. Các giai cấp, tầng lớp xã hội và nhóm xã hội cơ bản trong cơ cấu xã hội – giai cấp của thời kì quá độ lên CNXH là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Giai cấp công nhân.",
        b: "Giai cấp tư bản.",
        c: "Giai cấp nông dân.",
        d: "Tầng lớp doanh nhân.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 207",
        question: "Sự hình thành và phát triển của Chủ nghĩa xã hội khoa học trải qua mấy giai đoạn?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "3 giai đoạn.",
        b: "2 giai đoạn.",
        c: "4 giai đoạn.",
        d: "5 giai đoạn.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 208",
        question: "Ở nước ta, thực hiện có hiệu quả chính sách dân số là nhằm mục đích nào?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Đảm bảo trật tự, an toàn xã hội.",
        b: "Thực hiện xóa đói, giảm nghèo.",
        c: "Ổn định mọi mặt đời sống xã hội, phát triển kinh tế.",
        d: "Thúc đẩy sản xuất phát triển.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 209",
        question: "Chọn đáp án KHÔNG đúng. Tộc người là cộng đồng người được hình thành lâu dài trong lịch sử có đặc trưng cơ bản:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Cộng đồng về ngôn ngữ.",
        b: "Cộng đồng về kinh tế.",
        c: "Cộng đồng về văn hoá.",
        d: "Ý thức tự giác tộc người.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 210",
        question: "Quyền bình đẳng giữa các dân tộc là cơ sở để:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Thực hiện quyền dân tộc thuộc địa và xây dựng mối quan hệ đoàn kết giữa các dân tộc thuộc địa.",
        b: "Thực hiện quyền ngang nhau giữa các dân tộc thuộc địa và xây dựng mối quan hệ đoàn kết giữa các dân tộc thuộc địa.",
        c: "Thực hiện quyền dân tộc tự quyết và xây dựng mối quan hệ hữu nghị, hợp tác giữa các dân tộc.",
        d: "Thực hiện quyền dân tộc tự do và xây dựng mối quan hệ hữu nghị, hợp tác giữa các dân tộc.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 211",
        question: "Chọn đáp án đúng nhất. Gia đình có vai trò quyết định đối với:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Cuộc sống cá nhân của tất cả các thành viên trong gia đình.",
        b: "Giáo dục tư tưởng lối sống cho các thành viên trong gia đình.",
        c: "Chính sách xã hội hoá giáo dục.",
        d: "Sự tồn tại, vận động và phát triển của xã hội.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 212",
        question: "Phát kiến vĩ đại nào của Ph. Ăngghen và C. Mác để khắc phục hạn chế của chủ nghĩa xã hội không tưởng?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Chủ nghĩa duy vật lịch sử.",
        b: "Học thuyết về giá trị thặng dư.",
        c: "Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân.",
        d: "Chủ nghĩa duy vật biện chứng.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 213",
        question: "Tác phẩm nào của Ph.Ăngghen đã luận chứng sự phát triển của chủ nghĩa xã hội từ không tưởng đến khoa học?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Gia đình thánh.",
        b: "Hệ tư tưởng Đức.",
        c: "Chống Đuyrinh.",
        d: "Tuyên ngôn Đảng Cộng sản.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 214",
        question: "C.Mác và Ph.Ăngghen đã chỉ rõ: “bước thứ nhất trong cách mạng công nhân là […]”. Chọn đáp án đúng nhất điền vào chổ trống.",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Giai cấp vô sản biến thành giai cấp thống trị là giành lấy dân chủ.",
        b: "Giai cấp tư sản biến thành giai cấp bị thống trị là giành lấy dân chủ.",
        c: "Giai cấp tư sản biến thành giai cấp bị lật đổ là giành lấy dân chủ.",
        d: "Giai cấp công nhân thay thế giai cấp tư sản giành lấy chính quyền là giành lấy dân chủ.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 215",
        question: "Quyền tự quyết dân tộc KHÔNG bao gồm:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Quyền phân lập thành quốc gia độc lập của các tộc người thiểu số trong một quốc gia đa tộc người.",
        b: "Quyền các dân tộc tự quyết định lấy vận mệnh và quyền tự lựa chọn chế độ chính trị.",
        c: "Quyền tách ra thành lập một quốc gia dân tộc độc lập và quyền tự nguyện liên hiệp với dân tộc khác.",
        d: "Quyền các dân tộc có quyền tự lựa chọn chế độ chính trị và con đường phát triển cho dân tộc mình.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 216",
        question: "Theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học, cách mạng vô sản trên lý thuyết có thể được thực hiện theo con đường nào?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Đấu tranh chính trị.",
        b: "Đấu tranh chính trị và đấu tranh vũ trang.",
        c: "Bạo lực vũ trang.",
        d: "Nhân đạo, hoà bình.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 217",
        question: "Theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học, chủ nghĩa xã hội phải là xã hội:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Giải phóng giai cấp, giải phóng dân tộc, giải phóng xã hội, giải phóng con người, tạo điều kiện để con người phát triển toàn diện.",
        b: "Giải phóng giai cấp nông dân, giải phóng xã hội, giải phóng con người, tạo điều kiện để con người phát triển toàn diện cá nhân.",
        c: "Giải phóng giai cấp công nhân, giải phóng dân tộc, giải phóng con người, tạo điều kiện để con người phát triển toàn diện giá trị bản thân.",
        d: "Giải phóng giai cấp vô sản, giải phóng con người khỏi áp bức, bóc lột, bất công, tạo điều kiện để con người phát triển toàn diện giá trị tập thể.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 218",
        question: "Nội dung nào là một trong những phương hướng cơ bản của chính sách dân số ở nước ta?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Tăng cường công tác lãnh đạo và quản lí đối với công tác dân số.",
        b: "Tăng cường bộ máy Nhà nước đối với công tác dân số.",
        c: "Tiếp tục giảm tốc độ gia tằn dân số.",
        d: "Phân bố dân số hợp lí.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 219",
        question: "Giai cấp công nhân Việt Nam ra đời vào thời gian nào? Chọn đáp án đúng nhất.",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Trước giai cấp tư sản Pháp vào đầu thế kỷ XIX.",
        b: "Trước giai cấp tư sản Việt Nam vào đầu thế kỷ XX.",
        c: "Trước giai cấp tư sản Pháp vào đầu thế kỷ XX.",
        d: "Trước giai cấp tư sản Việt Nam vào đầu thế kỷ XXI.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 220",
        question: "Chọn đáp án KHÔNG đúng. Cơ cấu xã hội – giai cấp của thời kỳ quá độ lên CNXH có những biến đổi mang tính qui luật là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Bị qui định bởi cơ cấu kinh tế của thời kỳ quá độ lên CNXH.",
        b: "Biến đổi gắn liền với sự phát triển của cách mạng vô sản.",
        c: "Biến đổi phức tạp, đa dạng, làm xuất hiện các tầng lớp xã hội mới.",
        d: "Biến đổi trong mối quan hệ vừa đấu tranh, vừa liên minh.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 221",
        question: "Chọn đáp án KHÔNG đúng. Nguồn gốc của tôn giáo:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Nguồn gốc địa lý, lịch sử hình thành con người.",
        b: "Nguồn gốc tự nhiên, kinh tế – xã hội.",
        c: "Nguồn gốc nhận thức.",
        d: "Nguồn gốc tâm lý.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 222",
        question: "Chọn đáp án đúng nhất. Theo chủ nghĩa Mác – Lênin bản chất của tôn giáo là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Một hình thái ý thức xã hội phản ánh hư ảo hiện thực khách quan.",
        b: "Phản ánh hư ảo của những lực lượng bên ngoài chi phối cuộc sống hàng ngày của con người.",
        c: "Một hiện tượng xã hội – văn hoá do con người sáng tạo ra, phản ánh ước mơ, suy nghĩ của họ.",
        d: "Một thực thể xã hội với các tiêu chí cơ bản: có niềm tin sâu sắc vào đấng siêu nhiên, thần linh.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 223",
        question: "Hiện nay ở Việt Nam, để đảm bảo lợi ích của gia đình và sự phát triển bền vững của xã hội, thông điệp trong kế hoạch hoá gia đình là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Nên có từ 1 đến 2 con.",
        b: "Nên sinh đủ 2 con.",
        c: "Nên sinh 1 con.",
        d: "Nên sinh 1 trai, 1 gái.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 224",
        question: "Trong cơ cấu xã hội – giai cấp, giai cấp hay tầng lớp nào giữ vai trò chủ đạo, tiên phong trong quá trình công nghiệp hoá, hiện đại hoá?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Giai cấp tư bản.",
        b: "Tầng lớp trí thức mới.",
        c: "Đảng Cộng sản.",
        d: "Giai cấp công nhân.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 225",
        question: "Tác phẩm chủ yếu và cơ bản trình bày chủ nghĩa xã hội khoa học là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Chống Đuyrinh – Ph.Ăngghen.",
        b: "Làm gì? - V.I.Lênin.",
        c: "Bộ Tư bản – C.Mac.",
        d: "Tình cảnh nước Anh – Ph.Ăngghen.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 226",
        question: "Mục tiêu phân bố dân cư hợp lí của chính sách dân số nước ta để:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Giảm sự chênh lệch lao động giữa các vùng.",
        b: "Khai thác tiềm năng và phát huy thế mạnh của từng vùng, miền.",
        c: "Hạn chế tập trung đông dân cư vào đô thị lớn.",
        d: "Giảm lao động thừa ở thành thị.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 227",
        question: "Sự chuyển đổi trong cơ cấu kinh tế thị trường dẫn đến biến đổi trong cơ cấu xã hội – giai cấp, hình thành cơ cấu xã hội – giai cấp đa dạng hơn ở Việt Nam được bắt đầu từ thời điểm nào?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Sau cách mạng tháng Tám năm 1945.",
        b: "Sau cách mạng thống nhất đất nước năm 1975.",
        c: "Từ Đại hội VI của Đảng năm 1986.",
        d: "Từ Đại hội VII của Đảng năm 1991.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 228",
        question: "Công cụ để xoá bỏ những lệ cũ, lạc hậu, đè nặng lên vai người phụ nữ đồng thời thực hiện giải phóng phụ nũ và bảo vệ hạnh phúc gia đình trong thời kỳ quá độ lên CNXH là gì?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Luật pháp nghiêm minh.",
        b: "Nhà nước pháp quyền.",
        c: "Hội liên hiệp phụ nữ.",
        d: "Đạo đức XHCN.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 229",
        question: "Loại hình nào của cơ cấu xã hội có vị trí quan trọng nhất?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Cơ cấu xã hội – giai cấp.",
        b: "Cơ cấu xã hội – dân cư.",
        c: "Cơ cấu xã hội – dân tộc.",
        d: "Cơ cấu xã hội – tôn giáo.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 230",
        question: "Sứ mệnh lịch sử của giai cấp công nhân Việt Nam hiện nay là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Giải quyết mâu thuẫn lợi ích cơ bản giữa giai cấp vô sản với nhà nước phong kiến, thiết lập nhà nước XHCN, thực hiện tiến bộ và công bằng, dân chủ xã hội.",
        b: "Giải quyết mâu thuẫn lợi ích cơ bản giữa giai cấp công nhân với giai cấp tư sản, phấn đấu cho việc xác lập một trật tự xã hội mới công bằng và bình đẳng.",
        c: "Lực lượng đi đầu trong sự nghiệp công nghiệp hoá, hiện đại hoá đất nước vì mục tiêu dân giàu nước, nước mạnh, dân chủ, công bằng, văn minh.",
        d: "Thực hiện cuộc cách mạng của đại đa số mưu lợi ích cho tuyệt đại đa số, nhờ việc hướng tới xây dựng một xã hội mới dựa trên công hữu những tư liệu sản xuất chủ yếu của xã hội.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 231",
        question: "Yếu tố quyết định mối quan hệ hợp tác và gắn bó chặt chẽ với nhau trong cơ cấu xã hội – giai cấp của thời kì quá độ lên CNXH là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Chung sức xây dựng xã hội mới, xã hội XHCN.",
        b: "Chung sức xây dựng xã hội mới, loại bỏ những thói hư tật xấu của xã hội cũ để lại.",
        c: "Chung sức cải tạo xã hội cũ, xây dựng xã hội mới trên mọi lĩnh vực.",
        d: "Đoàn kết, nhất trí trong xây dựng xã hội XHCN công bằng, giàu mạnh.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 232",
        question: "Trên lĩnh vực tư tưởng và văn hóa, thời kì quá độ ở nước ta có đặc điểm gì?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Nền văn háo tiến bộ, đậm đà bản sắc dân tộc.",
        b: "Quá trình hội nhập với văn hóa thế giới diên ra mạnh mẽ.",
        c: "Còn tồn tại nhiều loại, nhiều khuynh hướng tư tưởng, văn hóa khác nhau.",
        d: "Các giá trị văn hóa truyền thống được giữ gìn, phát huy.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 233",
        question: "Bản chất dân chủ XHCN ở Việt Nam được thực hiện thông qua hình thức:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Dân chủ gián tiếp, dân chủ đại diện.",
        b: "Dân chủ gián tiếp, dân chủ trực tiếp.",
        c: "Dân chủ trực tiếp.",
        d: "Dân chủ uỷ quyền.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 234",
        question: "Giai cấp công nhân muốn thực hiện cuộc cách mạng triệt để phải thông qua đội tiên phong là:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Đảng Cộng sản Bônsevich.",
        b: "Đảng Cộng sản Việt Nam.",
        c: "Quốc tế Cộng sản.",
        d: "Đảng Cộng sản.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 235",
        question: "Theo Mác và Ăngghen giai cấp công nhân đại biểu cho, chọn phương án đúng nhất:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Phương thức sản xuất hiện đại.",
        b: "Ý chí đấu tranh của giai cấp vô sản.",
        c: "Lực lượng, phương thức sản xuất tiên tiến, quyết định sự tồn tại và phát triển của xã hội hiện đại.",
        d: "Tinh thần cách mạng triệt để.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 236",
        question: "“Chế độ dân chủ vô sản so với bất kỳ chế độ dân chủ tư sản nào cũng dân chủ hơn gấp triệu lần..” là phát biểu của ai?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "C. Mác.",
        b: "V.I.Lênin.",
        c: "Ph.Ăngghen.",
        d: "Hồ Chí Minh.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 237",
        question: "Đảng ta đề ra bao nhiêu phương hướng cơ bản để xây dựng cơ cấu xã hội – giai cấp và tăng cường khối liên minh giai cấp, tầng lớp trong xã hội Việt Nam?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Bốn phương hướng.",
        b: "Năm phương hướng.",
        c: "Sáu phương hướng.",
        d: "Tám phương hướng.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 238",
        question: "Những yếu tố tư tưởng XHCN được xuất hiện từ khi nào?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Chế độ tư bản chủ nghĩa ra đời.",
        b: "Sự xuất hiện chế độ tư hữu, xuất hiện giai cấp thống trị và bóc lột.",
        c: "Sự xuất hiện giai cấp công nhân.",
        d: "Thời cộng sản nguyên thủy.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 239",
        question: "Để thực hiện được quyền bình đẳng dân tộc, trước hết:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Phải thủ tiêu giai cấp tư sản.",
        b: "Phải thủ tiêu tình trạng áp bức giai cấp.",
        c: "Phải thủ tiêu nhà nước tư sản.",
        d: "Phải thủ tiêu bất bình đẳng giữa các dân tộc.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 240",
        question: "Chủ nghĩa xã hội mà nước ta đang xây dựng là một xã hội phát triển:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Ưu việt hơn các xã hội trước.",
        b: "Lợi thế hơn các xã hội trước.",
        c: "Nhanh chóng.",
        d: "Tự do.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 241",
        question: "Sứ mệnh lịch sử của giai cấp công nhân xuất phát từ tiền đề kinh tế – xã hội với biểu hiện nổi bật:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Xã hội hoá sản xuất làm xuất hiện những tiền đề vật chất, thúc đẩy sự phát triển của xã hội, thúc đẩy sự vận động của mâu thuẫn cơ bản trong lòng phương thức sản xuất TBCN.",
        b: "Xã hội hoá sản xuất làm thúc đẩy mâu thuẫn giữa LLSX với tính chất chiếm hữu tư nhân TBCN về tư liệu sản xuất và sản sinh ra giai cấp công nhân, rèn luyện nó thành chủ thể để giải quyết mâu thuẫn.",
        c: "Giải quyết mâu thuẫn cơ bản về kinh tế và chính trị trong lòng phương thức sản xuất TBCN, đó là tính quy định khách quan, yêu cầu khách quan của sự vận động, phát triển của lịch sử từ TBCN lên CNXH.",
        d: "Thực hiện cuộc cách mạng của đại đa số mưu lợi ích cho tuyệt đại đa số, nhờ việc hướng tới xây dựng một xã hội mới dựa trên công hữu những tư liệu sản xuất chủ yếu của xã hội.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 242",
        question: "Dựa trên cơ sở tổng kết kinh nghiệm cuộc cách mạng trong giai đoạn nào của giai cấp công nhân, Ph.Ăngghen và C.Mác tiếp tục phát triển nội dung của chủ nghĩa xã hội khoa học?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Từ năm 1948 đến 1952.",
        b: "Từ năm 1748 đến 1752.",
        c: "Từ năm 1850 đến 1852.",
        d: "Từ năm 1848 đến 1852.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 243",
        question: "“Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan nhà nước trong thực thi các quyền lập pháp, hành pháp, tư pháp” là quan điểm của:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Đại hội Đảng toàn quốc lần thứ IX.",
        b: "Đại hội Đảng toàn quốc lần thứ X.",
        c: "Đại hội Đảng toàn quốc lần thứ XI.",
        d: "Đại hội Đảng toàn quốc lần thứ XII.",
        },
        correctAnswer: "d",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là d"
        },
    {
        title: "Câu 244",
        question: "Thuật ngữ “dân chủ” ra đời vào khoảng thời gian nào?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Thế kỷ thứ VII – VI trước công nguyên.",
        b: "Thế kỷ thứ VII – VI sau công nguyên.",
        c: "Thế kỷ thứ V – IV trước công nguyên.",
        d: "Thế kỷ thứ V – IV sau công nguyên.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 245",
        question: "Theo quan điểm của các nhà sáng lập chủ nghĩa xã hội khoa học, cách mạng vô sản trên thực tế được thực hiện theo con đường nào?",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Đấu tranh chính trị.",
        b: "Đấu tranh chính trị và đấu tranh vũ trang.",
        c: "Bạo lực vũ trang.",
        d: "Nhân đạo, hoà bình.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 246",
        question: "Giai cấp công nhân Việt Nam bao gồm lực lượng nào? Chọn phương án đúng nhất.",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Lao động chân tay và trí óc, làm công hưởng lương trong các loại hình sản xuất, kinh doanh và dịch vụ công nghiệp.",
        b: "Lao động giản đơn và trừu tượng, làm công hưởng lương trong các loại hình sản xuất, kinh doanh và dịch vụ công nghiệp.",
        c: "Lao động phức tạp và giản đơn, làm công hưởng lương trong các loại hình sản xuất, kinh doanh và dịch vụ công nghiệp.",
        d: "Lao động trí thức và giản đơn, làm công hưởng lương trong các loại hình sản xuất, kinh doanh, dịch vụ có tính chất công nghiệp.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    {
        title: "Câu 247",
        question: "Chọn đáp án KHÔNG đúng. Dân tộc Việt Nam hiện nay có đặc điểm nổi bật:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Các dân tộc ở Việt Nam có trình độ phát triển không đều.",
        b: "Các dân tộc Việt Nam có truyền thống đoàn kết gắn bó lâu đời trong cộng đồng dân tộc – quốc gia thống nhất.",
        c: "Các dân tộc cư trú theo từng vùng lãnh thổ riêng biệt, dân tộc thiểu số sống chủ yếu ở vùng đồi núi.",
        d: "Mỗi dân tộc có bản sắc văn hoá riêng, góp phần tạo nên sự phong phú đa dạng của nền văn hoá Việt Nam thống nhất.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 248",
        question: "Điền vào chổ trống. “Bên cạnh những dấu vết của xã hội cũ, xuất hiện những yếu tố của xã hội mới, do vậy tất yếu sẽ diễn ra sự tồn tại […] giữa những giai cấp, tầng lớp cũ và mới”.",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Song song.",
        b: "Đan xen.",
        c: "Kết hợp.",
        d: "Thay thế.",
        },
        correctAnswer: "b",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là b"
        },
    {
        title: "Câu 249",
        question: "Điểm tương đồng giữa giai cấp công nhân hiện nay và giai cấp công nhân truyền thống ở thế kỷ XIX, chọn đáp án đúng nhất:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Đều là LLSX hiện đại, chủ thể của sử dụng máy móc trong sản xuất.",
        b: "Đều là LLSX hàng đầu của xã hội đại diện cho máy móc, phương thức sản xuất tiên tiến.",
        c: "Đều là LLSX hàng đầu, bị giai cấp tư sản bóc lột, luôn là lực lượng đi đầu trong đấu tranh vì hoà bình, hợp tác và phát triển, dân chủ, tiến bộ XHCN.",
        d: "Đều là đại diện đi đầu cho các phong trào đấu tranh vì hoà bình, hợp tác và phát triển, vì dân sinh, dân chủ, tiến bộ xã hội và chủ nghĩa xã hội.",
        },
        correctAnswer: "c",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là c"
        },
    {
        title: "Câu 250",
        question: "Xu hướng biến đổi cơ cấu kinh tế ở mỗi quốc gia khi bắt đầu thời kỳ quá độ diễn ra khác nhau là bởi vì:",
        background: "<img src='./img/bg_slide1.jpg'>",
        answers: {
        a: "Do qui định bởi sự khác biệt về trình độ phát triển kinh tế, về hoàn cảnh, điều kiện lịch sử cụ thể của mỗi nước.",
        b: "Do qui định bởi sự khác biệt về trình độ phát triển xã hội, về hoàn cảnh, điều kiện lịch sử cụ thể của mỗi nước.",
        c: "Do qui định bởi sự khác biệt về trình độ phát triển lực lượng sản xuất, về hoàn cảnh, điều kiện lịch sử cụ thể của mỗi nước.",
        d: "Do qui định bởi sự khác biệt về trình độ phát triển phương thức sản xuất, về hoàn cảnh, điều kiện lịch sử cụ thể của mỗi nước.",
        },
        correctAnswer: "a",
        correctAnswerText: "Đúng",
        falseAnswerText: "Sai, câu trả lời đúng là a"
        },
    

]
