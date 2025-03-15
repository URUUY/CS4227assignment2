@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
        User user = userRepository.findByUsername(request.getUsername())
            .orElseThrow(() -> new RuntimeException("用户不存在"));
        if (passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return ResponseEntity.ok("模拟JWT令牌");
        } else {
            throw new RuntimeException("密码错误");
        }
    }
}