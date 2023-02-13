num_list = [7, 18, 6]

def process_a(num):
    return num * 2 - num

def process_b(num):
    return num ** 3 // (num + 2)

def process_c(num):
    return num + 5

answer = process_a(num_list[0]) + process_b(num_list[1]) + process_c(num_list[2])
print(answer)