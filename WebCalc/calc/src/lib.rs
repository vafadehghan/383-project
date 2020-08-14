
pub extern fn main() {
    println!("Hello, world!");
}

#[no_mangle]
fn fib(n: u32) -> u32 {
    if n == 0 {
        return 0;
    }
    let mut a = 0;
    let mut b = 1;
    let mut c;
    for _ in 1..n {
        c = a + b;
        a = b;
        b = c;
    }

    return b;
}