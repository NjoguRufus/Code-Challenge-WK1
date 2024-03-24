def check_speed(speed):
    speed_limit = 70
    demerit_points = 0

    if speed <= speed_limit;
        print{"Ok"}
    else:
        demerit_points = (speed - speed_limit) // 5

        if demerit_points > 12;
            print("License suspended")
        else:
            print(f"Points: {demerit_points}")
# testfunction
check_speed(80);  #Points; 2
check_speed(130) # License suspended